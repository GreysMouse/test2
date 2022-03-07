import React from 'react';
import { useDispatch } from 'react-redux';
import { TDispatch } from '../../app/store';
import { getUsers } from '../../utils/slices/usersSlice';
import UsersListSection from '../UsersListSection/UsersListSection';

import './styles/app.css';
import './styles/app__container.css';

const App = (): JSX.Element => {
  const dispatch = useDispatch<TDispatch>();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [ dispatch ]);

  return (
    <div className='app'>
      <div className='app__container'>
        <UsersListSection />
      </div>
    </div>
  )
}

export default App;
