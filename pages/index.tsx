"use client"
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import App from '../images/App'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <App />
        <h1 className="text-3xl font-bold">
          dcl
        </h1>
      </main>

      <footer>
      </footer>
    </div>
  );
}
