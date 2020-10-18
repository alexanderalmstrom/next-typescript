import Link from 'next/link'
import styles from '../styles/main.module.scss'

import { IPostFields } from '../interfaces'

const PostPreview = ({ title, slug }: IPostFields) => (
  <article>
    <h2 className={styles.title}>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        {title}
      </Link>
    </h2>
  </article>
)

export default PostPreview
