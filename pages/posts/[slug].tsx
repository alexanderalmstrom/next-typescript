import { GetStaticProps, GetStaticPaths } from 'next'
import { contentfulClient } from '../../services/contentful'
import Layout from '../../components/Layout'
import Error from '../../components/Error';

import { IPost } from '../../interfaces'

type Props = {
	post?: IPost
  errors?: string
}

const PostBySlug = ({ post, errors }: Props) => {
  if (errors) <Error errors={errors} />

  return (
    <Layout title={post?.fields.title} description={post?.fields.description}>
      {post && (
				<>
					<h1>{post.fields.title}</h1>
					{post.fields.description && <p>{post.fields.description}</p>}
				</>
			)}
    </Layout>
  )
}

export default PostBySlug

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
