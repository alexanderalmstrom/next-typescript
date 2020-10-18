import PostPreview from './PostPreview'
import { IPost } from '../interfaces'

type Props = {
	posts: IPost[]
}

const Posts = ({ posts }: Props) => (
  <>
		{posts.map((post: any, index: number) => {
			return <PostPreview key={index} {...post} />
		})}
  </>
)

export default Posts;
