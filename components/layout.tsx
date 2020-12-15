import React, {FC,ReactNode} from 'react'
import Head from 'next/head'
import styles from '../styles/layout.module.scss'

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>mako_wis portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className={styles.main}>
        {children}
      </main>     
      <footer className={styles.footer}>
        <a
          href="https://github.com/makowis"
          target="_blank"
        >
          Powered by mako_wis
        </a>
      </footer>
    </div>
  )
}

export default Layout