import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSorting, sortUsers } from '../../utils/slices/usersSlice';

import './styles/table-display-options-panel.css';
import './styles/table-display-options-panel__title.css';
import './styles/table-display-options-panel__label.css';
import './styles/table-display-options-panel__label_active.css';
import './styles/table-display-options-panel__button.css';

const TableDisplayOptionsPanel = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const sorting = useAppSelector(state => state.users.sorting);

  const sortByRegDate = () => {
    if (sorting === 'regdate_desc') {
      dispatch(setSorting('regdate_asc'));
      dispatch(sortUsers('regdate_asc'));
    }
    else {
      dispatch(setSorting('regdate_desc'));
      dispatch(sortUsers('regdate_desc'));
    }
  }

  const sortByRating = () => {
    if (sorting === 'rating_desc') {
      dispatch(setSorting('rating_asc'));
      dispatch(sortUsers('rating_asc'));
    }
    else {
      dispatch(setSorting('rating_desc'));
      dispatch(sortUsers('rating_desc'));
    }
  }

  const isSortingByRegDate = sorting === 'regdate_asc' || sorting === 'regdate_desc';
  const isSortingByRating = sorting === 'rating_asc' || sorting === 'rating_desc';

  return (
    <div className='table-display-options-panel'>
      <h6 className='table-display-options-panel__title'>{ 'Сортировка:' }</h6>
      <label className={ 'table-display-options-panel__label' + (isSortingByRegDate ? ' table-display-options-panel__label_active' : '') }>
        <input
          className='table-display-options-panel__button'
          type='radio'
          name='sort'
          value='regdate'
          onClick={ sortByRegDate }
        />
        { 'Дата регистрации' }
      </label>
      <label className={ 'table-display-options-panel__label' + (isSortingByRating ? ' table-display-options-panel__label_active' : '') }>
        <input
          className='table-display-options-panel__button'
          type='radio'
          name='sort'
          value='rating'
          onClick={ sortByRating }
        />
        { 'Рейтинг' }
      </label>
    </div>
  )
}

export default TableDisplayOptionsPanel;
