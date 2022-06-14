import React from 'react';
import cn from 'classnames';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setCurrentFilter } from '../../slices/uiSlice.js';

const FilterControls = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currentFilter } = useSelector((state) => state.ui);
  const onChangeFilter = ([, newFilter]) => dispatch(setCurrentFilter(newFilter ?? currentFilter));

  const allCls = cn('py-0', { 'text-secondary': currentFilter !== 'all' });
  const activeCls = cn('py-0', { 'text-secondary': currentFilter !== 'active' });
  const completedCls = cn('py-0', { 'text-secondary': currentFilter !== 'completed' });

  return (
    <ToggleButtonGroup type="checkbox" value={currentFilter} onChange={onChangeFilter}>
      <ToggleButton className={allCls} variant="=light" id="allFilter" value="all" aria-label="allFilter">
        <span className="small">{t('buttons.all')}</span>
      </ToggleButton>
      <ToggleButton className={activeCls} variant="=light" id="activeFilter" value="active" aria-label="activeFilter">
        <span className="small">{t('buttons.active')}</span>
      </ToggleButton>
      <ToggleButton className={completedCls} variant="=light" id="completedFilter" value="completed" aria-label="completedFilter">
        <span className="small">{t('buttons.completed')}</span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FilterControls;
