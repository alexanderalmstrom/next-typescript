import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import siteStyles from '../styles/site.module.scss'
import mainStyles from '../styles/main.module.scss'
import headerStyles from '../styles/header.module.scss'
import footerStyles from '../styles/footer.module.scss'
import navStyles from '../styles/nav.module.scss'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const siteName = 'Next TypeScript'

const Layout = ({ children, title, description }: Props) => (
  <div className={siteStyles.site}>
    <Head>
      <title>{title ? `${title} - ${siteName}` : siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
    </Head>
    <header className={headerStyles.header}>
      <nav className={navStyles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </header>
    <main className={mainStyles.main}>
      {children}
    </main>
    <footer className={footerStyles.footer}>Next TypeScript</footer>
  </div>
)

export default Layout
