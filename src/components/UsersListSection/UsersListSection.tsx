import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { PAGINATION_STEP, USERS_SECTION_TITLE } from '../../constants';

import ClearFilterButton from '../ClearFilterButton/ClearFilterButton';
import SearchForm from '../SearchForm/SearchForm';
import SearchPanel from '../SearchPanel/SearchPanel';
import UsersTable from '../UsersTable/UsersTable';
import TableDisplayOptionsPanel from '../TableDisplayOptionsPanel/TableDisplayOptionsPanel';
import PageNavPanel from '../PageNavPanel/PageNavPanel';

import './styles/users-list-section.css';
import './styles/users-list-section__title.css';
import './styles/users-list-section__table-container.css';

const UsersListSection = (): JSX.Element => {
  const currentPage = useAppSelector(state => state.pages.currentPage);

  const sliceStart = (currentPage - 1) * PAGINATION_STEP;
  const sliceEnd = currentPage * PAGINATION_STEP - 1;

  const usersIds = useAppSelector(state => {
    return state.users.displayedUsers.map(user => user.id);
  }, shallowEqual);

  return (
    <section className='users-list-section'>
      <h1 className='users-list-section__title'>{ USERS_SECTION_TITLE }</h1>
      <SearchPanel>
        <SearchForm />
        <ClearFilterButton />
      </SearchPanel>
      <div className='users-list-section__table-container'>
        <TableDisplayOptionsPanel />
        <UsersTable usersIds={ usersIds.slice(sliceStart, sliceEnd) } />
      </div>
      <PageNavPanel itemsCount={ usersIds.length } />
    </section>
  )
}

export default UsersListSection;
