import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const siteName = 'Next TypeScript'

const Layout = ({ children, title, description }: Props) => (
  <>
    <Head>
      <title>{title ? `${title} - ${siteName}` : siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </header>
    {children}
  </>
)

export default Layout
