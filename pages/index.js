import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 classname="text-3xl font-bold">
          dcl
        </h1>
      </main>

      <footer>
      </footer>
    </div>
  );
}
