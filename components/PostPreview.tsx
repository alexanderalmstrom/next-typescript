import Link from 'next/link'

import { IPost } from '../interfaces'

type Props = {
  data: IPost
}

const PostPreview = ({ data }: Props) => (
  <article>
    <h2>
      <Link href="/posts/[slug]" as={`/posts/${data.fields.slug}`}>
        {data.fields.title}
      </Link>
    </h2>
  </article>
)

export default PostPreview
