import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/main.module.scss'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const siteName = 'Next TypeScript'

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.site}>
    <Head>
      <title>{title ? `${title} - ${siteName}` : siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {description && <meta name="description" content={description} />}
    </Head>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>Next TypeScript</footer>
  </div>
)

export default Layout
