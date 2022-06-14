import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import tasksReducer from './slices/tasksSlice.js';
import uiReducer from './slices/uiSlice.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { tasks: tasksReducer, ui: uiReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <I18nextProvider i18n={i18n}>
          <Provider store={store}>
              {children}
          </Provider>
      </I18nextProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }