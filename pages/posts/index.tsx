import { GetStaticProps } from 'next'
import { contentfulClient } from '../../services/contentful'
import Layout from '../../components/Layout'
import Posts from '../../components/Posts'

import { IPost } from '../../interfaces'

type Props = {
  posts: IPost[]
}

const PostsIndex = ({ posts }: Props) => (
  <Layout title="Posts">
    <h1>Posts</h1>
    <Posts posts={posts} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const { items: posts } = await contentfulClient.getEntries({ content_type: 'post' })

  return {
    props: {
      posts
    }
  }
}

export default PostsIndex
