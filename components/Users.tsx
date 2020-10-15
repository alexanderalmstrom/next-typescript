import * as React from 'react'
import UserItem from './UserItem'
import { User } from '../interfaces'

type Props = {
  users: User[]
}

const Users = ({ users }: Props) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        <UserItem data={user} />
      </li>
    ))}
  </ul>
)

export default Users
