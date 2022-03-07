import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { searchUsers, setSearchQuery } from '../../utils/slices/usersSlice';
import { USERS_SEARCH_PLACEHOLDER } from '../../constants';

import './styles/search-form.css';
import './styles/search-form__input.css';
import './styles/search-form__submit-button.css';
import { setCurrentPage } from '../../utils/slices/pagesSlice';

const SearchForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector(state => state.users.searchQuery);

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(evt.target.value));
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(searchUsers(searchQuery));
    dispatch(setCurrentPage(1));
  }

  return (
    <form className='search-form' onSubmit={ handleSubmit }>
      <button className='search-form__submit-button' type='submit' />
      <input
        className='search-form__input'
        placeholder={ USERS_SEARCH_PLACEHOLDER }
        value={ searchQuery }
        onChange={ handleInput }
      />
    </form>
  )
}

export default SearchForm;
