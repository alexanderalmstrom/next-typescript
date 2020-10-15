import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'

import { contentfulClient } from '../services/contentful'
import { IPost } from '../../interfaces'

type Props = {
	post?: IPost
  errors?: string
}

const PostPage = ({ post, errors }: Props) => {
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
    <Layout title={`${ post ? post.fields.title : 'Posts' } - Next TypeScript`}>
      {post && (
				<>
					<h1>{post.fields.title}</h1>
					<p>{post.fields.description}</p>
				</>
			)}
    </Layout>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
	const { items: posts } = await contentfulClient.getEntries({ content_type: 'post' })

  const paths = posts.map((post: any) => ({
    params: { slug: post.fields.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { items: posts } = await contentfulClient.getEntries({ content_type: 'post' })

  try {		
		const slug = params?.slug

    const post = posts.find((data: any) => data.fields.slug === slug)
    return {
      props: {
        post
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
