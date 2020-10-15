import { GetStaticProps } from 'next'
import Link  from 'next/link';
import { IPost } from '../../interfaces'
import { contentfulClient } from '../services/contentful';
import Layout from '../../components/Layout'

type Props = {
  posts: IPost[]
}

const PostsPage = ({ posts }: Props) => (
  <Layout title="Posts - Next TypeScript">
    <h1>Posts</h1>
    {posts && posts.length && posts.map(({ sys, fields: post }) => (
      <article key={sys.id}>
        <h2>
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
      </article>
    ))}
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

export default PostsPage
