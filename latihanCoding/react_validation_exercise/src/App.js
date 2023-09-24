import React, { useState } from 'react';
import Card from './components/UI/card';
import AddUser from './components/User/addUser';
import UserList from './components/User/userList';

function App() {
  const [enteredUserList, setUserList] = useState([])

  const inputUserHandler = (getUsername, getAge) => {
    setUserList(previousData => {
      console.log(previousData)
      return [...previousData, {
        username : getUsername,
        age : getAge,
        id : Math.floor(Math.random() * 1000)
      }]
      
    })
  }
  return (
    <div>
    
      <Card>
      <AddUser
      addUser = {inputUserHandler}/>
      </Card> 
      <UserList
      users = {enteredUserList}/>
    </div>
  );
}

export default App;
