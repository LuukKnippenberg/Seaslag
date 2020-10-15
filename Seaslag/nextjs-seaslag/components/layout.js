import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Seaslag'
export const siteTitle = 'Seaslag'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Go head to head in Battleships with up to 4 players!"
        />
      </Head>
      <header className={styles.header}>

        <div class="navbar">
          <div class="logo"><h1>Seaslag</h1></div>
          <div class="menu">
            <ul>
              <li class="menu-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
          </div>
          <div class="profile">
                <Link href="/account">
                  <a>@username</a>
                </Link>
          </div>
        </div>
        
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {/* <footer>
          
      </footer> */}
    </div>
  )
}
