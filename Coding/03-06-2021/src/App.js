import {Fragment} from 'react';
import Users from './components/Users';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <Fragment>
      <Users />
      <UserList />
    </Fragment>
  );
}

export default App;
