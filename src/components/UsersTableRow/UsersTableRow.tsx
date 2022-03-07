import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteUser, resetUserForDelete, setUserForDelete } from '../../utils/slices/usersSlice';
import { getDateFromISO } from '../../utils/methods/getDateFromISO';
import { MODAL_WINDOW_USER_DELETE_MESSAGE } from '../../constants';
import ModalWindow from '../ModalWindow/ModalWindow';

import './styles/users-table-row.css';
import './styles/users-table-row__cell.css';
import './styles/users-table-row__delete-button.css';
import './styles/users-table-row__cell_type_username.css';

interface IUserTableRow {
  userId: string;
}

const UsersTableRow = ({ userId }: IUserTableRow): JSX.Element => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => {
    return state.users.displayedUsers.find(user => user.id === userId);
  }, shallowEqual);

  const isDeleting = useAppSelector(state => state.users.userForDelete === userId);

  const handleDeleteButtonClick = () => {
    dispatch(setUserForDelete(userId));
  }

  return (
    <>
      <tr className='users-table-row'>
        <td className='users-table-row__cell users-table-row__cell_type_username'>{ user?.username }</td>
        <td className='users-table-row__cell'>{ user?.email }</td>
        <td className='users-table-row__cell'>{ getDateFromISO(user?.registration_date || '') }</td>
        <td className='users-table-row__cell'>{ user?.rating }</td>
        <td className='users-table-row__cell'>
          <button className='users-table-row__delete-button' onClick={ handleDeleteButtonClick } />
        </td>
      </tr>
      {
        isDeleting && <ModalWindow
          message={ MODAL_WINDOW_USER_DELETE_MESSAGE }
          onSubmit={ () => dispatch(deleteUser(userId)) }
          onCancel={ () => dispatch(resetUserForDelete()) }
        />
      }
    </>
  )
}

export default UsersTableRow;
