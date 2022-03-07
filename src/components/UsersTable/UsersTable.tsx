import { USERS_TABLE_HEADINGS } from '../../constants';
import UsersTableRow from '../UsersTableRow/UsersTableRow';

import './styles/users-table.css';
import './styles/users-table__content.css';
import './styles/users-table__caption.css';
import './styles/users-table__header.css';
import './styles/users-table__header-cell.css';
import './styles/users-table__header-cell_type_delete-button.css';

interface IUsersTable {
  usersIds: string[];
}

const UsersTable = ({ usersIds }: IUsersTable): JSX.Element => {
  return (
    <div className='users-table'>
      <table className='users-table__content'>
        <caption className='users-table__caption'>{ USERS_TABLE_HEADINGS.CAPTION }</caption>
        <thead>
          <tr className='users-table__header'>
            <th className='users-table__header-cell' scope='col'>{ USERS_TABLE_HEADINGS.COL1 }</th>
            <th className='users-table__header-cell' scope='col'>{ USERS_TABLE_HEADINGS.COL2 }</th>
            <th className='users-table__header-cell' scope='col'>{ USERS_TABLE_HEADINGS.COL3 }</th>
            <th className='users-table__header-cell' scope='col'>{ USERS_TABLE_HEADINGS.COL4 }</th>
            <th className='users-table__header-cell users-table__header-cell_type_delete-button' scope='col' />
          </tr>
        </thead>
        <tbody>
          {
            usersIds.map(id => <UsersTableRow userId={ id } key={ id } />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable;
