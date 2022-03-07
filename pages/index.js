import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is the instagram 2.0</h1>
    </div>
  )
}
