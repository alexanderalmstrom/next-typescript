import { GetStaticProps } from 'next'
import { requestPosts } from '../../services/contentful'
import Layout from '../../components/Layout'
import Posts from '../../components/Posts'

import { IPost } from '../../interfaces'

type Props = {
  posts: IPost[];
}

const PostsPage = ({ posts }: Props) => {
  return (
    <Layout title="Posts">
      <Posts posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await requestPosts();

  return {
    props: {
      posts
    }
  }
}

export default PostsPage
