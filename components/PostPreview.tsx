import Link from 'next/link'
import { IPostFields } from '../interfaces'

import styles from '../styles/post-preview.module.scss'

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
