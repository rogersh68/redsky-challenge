import Header from './components/Header'
import Users from './components/Users'
import { useState, useEffect } from 'react'
import AddUser from './components/AddUser'
import fetch from 'node-fetch'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showAddUser, setShowAddUser] = useState(false)
  const [users, setUsers] = useState([])

  // get all the users from the server
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/users')
      const data = await res.json()
      setUsers(data)
    }
    fetchUsers()
  }, []);
 
  // Event Handlers
  const addUser = (user) => {
    fetch('/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      setUsers([...users, data])
      toast.success("Successfully added user.")
    })
    .catch(err => {
      toast.error("User was not added. Please try again.")
      console.log(err)
    })
  }
 
  const updateUser = (user) => {
    fetch('/update', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      toast.success("Successfully updated user.")
    })
    .catch(err => {
      toast.error("User was not updated. Please try again.")
      console.log(err)
    })
  }

  const deleteUser = (id) => {
    fetch('/delete', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: id}) 
    })
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      toast.success("Successfully deleted user.")
    })
    .catch(err => {
      toast.error("User was not deleted. Please try again.")
      console.log(err)
    })
  }
 
  return (
    <div className='container'>
      <ToastContainer />

      <Header 
        onAdd={() => setShowAddUser(!showAddUser)} 
        showAddUser={showAddUser}
      />

      {showAddUser && <AddUser onAdd={addUser}/>}

      {users.length > 0 ? <Users 
        users={users} 
        onDelete={deleteUser} 
        onUpdate={updateUser}
      /> : "Add Users"}
    </div>
  );
}

export default App;
