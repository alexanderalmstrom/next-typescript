import Layout from './Layout'
import styles from '../styles/main.module.scss'

import { IPostFields } from '../interfaces'

const PostArticle = ({ title, description }: IPostFields) => {
	return (
		<Layout title={title} description={description}>
		<article>
			<h1 className={styles.title}>{title}</h1>
			{description && <p>{description}</p>}
		</article>
	</Layout>
	)
}

export default PostArticle
