import PostItem from './PostItem'

import { IPost } from '../interfaces'

type Props = {
  posts: IPost[]
}

const Posts = ({ posts }: Props) => (
  <>
		{posts.map((post) => (
			<PostItem key={post.sys.id} data={post} />
		))}
  </>
)

export default Posts;
