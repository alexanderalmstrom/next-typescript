import Layout from './Layout'

import { IPost } from '../interfaces'

import styles from '../styles/main.module.scss'

type Props = {
	data: IPost
}

const PostArticle = ({ data }: Props) => (
	<Layout title={data?.fields.title} description={data?.fields.description}>
		<article>
			<h1 className={styles.title}>{data.fields.title}</h1>
			{data.fields.description && <p>{data.fields.description}</p>}
		</article>
	</Layout>
)

export default PostArticle
