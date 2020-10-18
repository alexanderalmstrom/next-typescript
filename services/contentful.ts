import { createClient, Entry, EntryCollection } from 'contentful'
import { IPost } from '../interfaces';

const host = process.env.NODE_ENV === 'test' ? 'preview.contentful.com' : process.env.CONTENTFUL_HOST
const environment = process.env.NODE_ENV === 'test' ? 'develop' : process.env.CONTENTFUL_ENV

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  host,
  environment
})

function getContents<T>(contentType: string, queries?: unknown): Promise<T[]> {
  return contentfulClient
    .getEntries(Object.assign({ content_type: contentType }, queries))
    .then((response: EntryCollection<unknown>) => {
      return response.items.map((entry: Entry<unknown>) => {
        const result: T = entry.fields as T
        return result
      })
    })
}

export function requestPosts(): Promise<IPost[]> {
  return getContents<IPost>('post')
    .then((post: IPost[]) => post)
}
