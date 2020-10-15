import { GetStaticProps } from 'next'
import { Post } from '../../interfaces'
import Layout from '../../components/Layout'

type Props = {
  posts: Post[]
}

const PostsPage = ({ posts }: Props) => (
  <Layout title="Posts - Next TypeScript">
    <h1>Posts</h1>
		{posts.map((post) => (
      <div key={post.id}>{post.name}</div>
    ))}
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = [
    {
      id: 1,
      name: "Hello world!",
      slug: "hello-world"
    },
    {
      id: 2,
      name: "Hello universe!",
      slug: "hello-universe"
    }
  ]

  return {
    props: {
      posts
    }
  }
}

export default PostsPage
