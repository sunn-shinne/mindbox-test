import { render, screen, fireEvent, cleanup } from './test-utils.js';
import App from './App';

afterEach(() => {
  cleanup();
  localStorage.clear();
})

test('initial app state', () => {
  render(<App />);
  const input = screen.getByLabelText('What needs to be done?');
  const tasksBlock = screen.getByTestId('tasks');

  expect(input).toHaveFocus();
  expect(input).not.toHaveClass('is-invalid');
  expect(input).not.toHaveTextContent();
  expect(tasksBlock).toBeEmptyDOMElement();
});

test('validation', () => {
  render(<App />);
  const input = screen.getByLabelText('What needs to be done?');
  const tasksBlock = screen.getByTestId('tasks');

  fireEvent.submit(input);
  expect(input).toHaveClass('is-invalid');
  expect(input).not.toHaveTextContent();
  expect(tasksBlock).toBeEmptyDOMElement();

  fireEvent.input(input, {target: {value: 'Call mom'}});
  fireEvent.submit(input);
  expect(input).not.toHaveClass('is-invalid');
  expect(input).not.toHaveTextContent();
  expect(tasksBlock).not.toBeEmptyDOMElement();
});

test('add and complete tasks', () => {
  render(<App />);
  const input = screen.getByLabelText('What needs to be done?');

  fireEvent.input(input, {target: {value: 'Call mom'}});
  fireEvent.submit(input);
  fireEvent.input(input, {target: {value: 'Buy bread'}});
  fireEvent.submit(input);

  expect(screen.getByLabelText('Call mom')).toBeInTheDocument();
  expect(screen.getByLabelText('Buy bread')).toBeInTheDocument();

  const firstTask = screen.getByLabelText('Call mom');
  const secondTask = screen.getByLabelText('Buy bread');

  expect(firstTask).not.toBeChecked();
  expect(secondTask).not.toBeChecked();

  fireEvent.click(firstTask);

  expect(firstTask).toBeChecked();
  expect(secondTask).not.toBeChecked();
});

test('filter and clearing tasks', async () => {
  render(<App />);
  const input = screen.getByLabelText('What needs to be done?');
  const tasksBlock = screen.getByTestId('tasks');
  const clearCompleted = screen.getByRole('button', { name: 'Clear competed' });

  const allFilter = screen.getByLabelText('allFilter');
  const activeFilter = screen.getByLabelText('activeFilter');
  const completedFilter = screen.getByLabelText('completedFilter');

  fireEvent.input(input, {target: {value: 'Call mom'}});
  fireEvent.submit(input);
  fireEvent.input(input, {target: {value: 'Buy bread'}});
  fireEvent.submit(input);

  const firstTask = screen.getByLabelText('Call mom');
  const secondTask = screen.getByLabelText('Buy bread');

  fireEvent.click(firstTask);
  fireEvent.click(activeFilter);
  expect(tasksBlock).toContainElement(screen.getByLabelText('Buy bread'));
  expect(firstTask).not.toBeInTheDocument();

  fireEvent.click(completedFilter);
  expect(tasksBlock).toContainElement(screen.getByLabelText('Call mom'));
  expect(secondTask).not.toBeInTheDocument();

  fireEvent.click(allFilter);
  expect(tasksBlock).toContainElement(screen.getByLabelText('Call mom'));
  expect(tasksBlock).toContainElement(screen.getByLabelText('Buy bread'));

  fireEvent.click(clearCompleted);
  expect(tasksBlock).toContainElement(screen.getByLabelText('Buy bread'));
  expect(firstTask).not.toBeInTheDocument();
});
