import React from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import {selectAllUsers} from '../../reducers/adminUsersSlice'
import {BallTriangle} from 'react-loader-spinner'
const UserList = () => {
  const {adminTheme} = useContext(ThemeContext)
 const users = useSelector(selectAllUsers)
  console.log('usersusersusers-->',users)
   return (
      <>
    <div className="container-fluid">
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <h4>Users List</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/admin/dashboard">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">UserList</li>
          </ol>
        </nav>
      </div>
      <div className="userTable mt-2">
        <table className={"table table-hover table-bordered table-"+adminTheme}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {(users.map(user => (
          <tr key={user._id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td><i className='bi bi-eye'></i></td>
          </tr>
        )))}
          </tbody>
        </table>
      </div>
    </div></>
  )
}

export default UserList