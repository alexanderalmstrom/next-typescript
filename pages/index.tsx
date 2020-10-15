import Link from 'next/link';
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </Layout>
)

export default IndexPage
