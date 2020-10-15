import PostPreview from './PostPreview'

import { IPost } from '../interfaces'

type Props = {
  posts: IPost[]
}

const Posts = ({ posts }: Props) => (
  <>
		{posts.map((post) => (
			<PostPreview key={post.sys.id} data={post} />
		))}
  </>
)

export default Posts;
