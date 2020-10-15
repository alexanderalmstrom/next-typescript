import Layout from './Layout'

import { IPost } from '../interfaces'

type Props = {
	data: IPost
}

const PostArticle = ({ data }: Props) => (
	<Layout title={data?.fields.title} description={data?.fields.description}>
		<article>
			<h1>{data.fields.title}</h1>
			{data.fields.description && <p>{data.fields.description}</p>}
		</article>
	</Layout>
)

export default PostArticle
