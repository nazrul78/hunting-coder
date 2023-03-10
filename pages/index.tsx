import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name='keywords' content='nextjs, huntingcoder blog, hunting coder'></meta>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
        <div className={styles.imagewrap}>
          <img className={styles.myImg} src='/homeimg.jpg' width={237} height={158} alt="hunting coder" />

        </div>

        <h1 className={styles.title}>
          <span>&lt;HuntingCoder/&gt;</span>
        </h1>

        <div>

          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2023?</h3>
            <p className={styles.p}>Javascript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime est excepturi!</p>
            <button className={styles.btn}>Read More</button>
          </div>

          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2023?</h3>
            <p>Javascript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>

          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2023?</h3>
            <p>Javascript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>


      </main>
    </>
  )
}
