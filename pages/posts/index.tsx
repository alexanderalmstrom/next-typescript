import { GetStaticProps } from 'next'
import { contentfulClient } from '../../services/contentful'
import Layout from '../../components/Layout'
import Posts from '../../components/Posts'

import { IPost } from '../../interfaces'

import styles from '../../styles/main.module.scss'

type Props = {
  posts: IPost[]
}

const PostsPage = ({ posts }: Props) => {
  return (
    <Layout title="Posts">
      <Posts posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { items: posts } = await contentfulClient.getEntries({ content_type: 'post' })

  return {
    props: {
      posts
    }
  }
}

export default PostsPage
