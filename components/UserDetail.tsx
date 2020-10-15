import * as React from 'react'

import { User } from '../interfaces'

type UserDetailProps = {
  user: User
}

const UserDetail = ({ user }: UserDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default UserDetail
