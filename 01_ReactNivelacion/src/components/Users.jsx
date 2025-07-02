import './Users.css'
import { useFetchUsers } from '../hooks/useFetchUsers';

const Users = () => {

  const { users } = useFetchUsers();

  return (
    <>
      <h3>Userts</h3>
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.name}
              {user.email}
              {user.phone}
              {user.website}</p>
          </li>
        ))}
      </ul> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td><a href={user.website} target='_blank'>{user.website}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

  )
}

export default Users
