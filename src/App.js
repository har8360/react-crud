import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";
//import {v4 as uuidv4} from 'uuid'

function App() {
  const setId = () => {
    const id = Math.floor(Math.random() * 1000000000);
    return id;
  };
  const usersData = [
    { id: setId(), name: "Diego", username: "diemun369" },
    { id: setId(), name: "Isaac", username: "blacky666" },
    { id: setId(), name: "Edgar", username: "zerocr123" },
  ];

  //state
  const [users, setUsers] = useState(usersData);

  //adding users
  const addUser = (user) => {
    user.id = setId();
    setUsers([...users, user]);
  };

  //deleting a usuer
  const deleteUser = (id) => {
    console.log(id);
    const FilteredArray = users.filter((user) => user.id !== id);
    console.log(FilteredArray);
    setUsers(FilteredArray);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
