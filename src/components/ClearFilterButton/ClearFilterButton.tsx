import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetFilters } from '../../utils/slices/usersSlice';
import { CLEAR_FILTERS_BUTTON_TEXT } from '../../constants';

import './styles/clear-filter-button.css';
import './styles/clear-filter-button_inactive.css';
import './styles/clear-filter-button__img.css';

const ClearFilterButton = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const isActive = useAppSelector(state => state.users.sorting !== '' || state.users.searchQuery !== '');

  const handleFiltersReset = () => {
    dispatch(resetFilters());
  }

  return (
    <button
      className={ 'clear-filter-button' + (!isActive ? ' clear-filter-button_inactive' : '') }
      type='button'
      onClick={ handleFiltersReset }
      disabled={ !isActive }
    >
      <div className='clear-filter-button__img' />
      { CLEAR_FILTERS_BUTTON_TEXT }
    </button>
  )
}

export default ClearFilterButton;
