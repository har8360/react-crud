import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
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

  //add user
  const addUser = (user) => {
    user.id = setId();
    setUsers([...users, user]);
  };

  //delete user
  const deleteUser = (id) => {
    console.log(id);
    const FilteredArray = users.filter((user) => user.id !== id);
    console.log(FilteredArray);
    setUsers(FilteredArray);
  };

  //edit user
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  //update user
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        {editing ? (
          <div>
            <div className="flex-large">
              <h2>Edit User</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex-large">
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          </div>
        )}

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            setEditing={setEditing}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
