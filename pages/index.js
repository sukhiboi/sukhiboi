import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sukhdev Singh</title>
        <link rel='icon' href='/me.jpg' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello I am{' '}
          <a target="_blank" href='https://www.github.com/sukhiboi'>Sukhdev Singh!</a>
        </h1>
      </main>
    </div>
  );
}
