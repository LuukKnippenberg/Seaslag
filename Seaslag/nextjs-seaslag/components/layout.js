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

        <div className={"navbar"}>
          <div className={"logo"}><h1>Seaslag</h1></div>
          <div className={"menu"}>
            <ul>
              <li className={`menu-item ${styles.center}`}>
                <Link href="/">
                  <a>Home</a>
                </Link>
               
              </li>
            </ul>
          </div>
          <div className={"profile"}>
                <Link href="/account">
                  <a>@username</a>
                </Link>
                
          </div>
        </div>
        
      </header>
      <main>{children}</main>
      
      {/* <footer>
          
      </footer> */}
    </div>
  )
}
