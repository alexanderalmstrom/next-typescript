import { GetStaticProps, GetStaticPaths } from 'next'

import { User } from '../../interfaces'
import { userData } from '../../utils/data'
import Layout from '../../components/Layout'
import UserDetail from '../../components/UserDetail'

type Props = {
  user?: User
  errors?: string
}

const UserSinglePage = ({ user, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error - Next TypeScript">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${ user ? user.name : 'Users' } - Next TypeScript`}>
      {user && <UserDetail user={user} />}
    </Layout>
  )
}

export default UserSinglePage

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = userData.map((user) => ({
    params: { id: user.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const user = userData.find((data) => data.id === Number(id))
    // By returning { props: user }, the StaticPropsDetail component
    // will receive `user` as a prop at build time
    return {
      props: {
        user
      }
    }
  } catch (err) {
    return {
      props: {
        errors: err.message
      }
    }
  }
}
