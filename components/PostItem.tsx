import React from 'react'
import Link from 'next/link'

import { IPost } from '../interfaces'

type Props = {
  data: IPost
}

const PostItem = ({ data }: Props) => (
  <article key={data.sys.id}>
    <h2>
      <Link href="/posts/[slug]" as={`/posts/${data.fields.slug}`}>
        {data.fields.title}
      </Link>
    </h2>
  </article>
)

export default PostItem
