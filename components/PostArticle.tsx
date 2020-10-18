import Layout from './Layout'
import { IPostFields } from '../interfaces'

import styles from '../styles/post-article.module.scss'

const PostArticle = ({ title, description }: IPostFields) => {
	return (
		<Layout title={title} description={description}>
		<article className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			{description && <p className={styles.description}>{description}</p>}
		</article>
	</Layout>
	)
}

export default PostArticle
