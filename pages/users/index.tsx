import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces'
import { userData } from '../../utils/data'
import Layout from '../../components/Layout'
import Users from '../../components/Users'

type Props = {
  users: User[]
}

const UsersPage = ({ users }: Props) => (
  <Layout title="Users - Next TypeScript">
    <h1>Users</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <Users users={users} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const users: User[] = userData
  return {
    props: {
      users
    }
  }
}

export default UsersPage
