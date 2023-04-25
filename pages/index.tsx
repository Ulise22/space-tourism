import Image from 'next/image'
import { Inter } from 'next/font/google'
import LayoutPage from '../components/LayoutPage'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LayoutPage title="">
        <main className={styles.home}>
          <section className={styles.home__container}>
            <article className={styles.home__article}>
              <h4>SO, YOU WANT TO TRAVEL TO</h4>
              <h1>SPACE</h1>
              <p>Let's face it, if you want to go to space, you might as well 
                genuinely go to outer space and not hover kind of on the 
                edge of it. Well sit back and relax because we'll give you a 
                truly out of this world experience!
              </p>
            </article>

            <article className={styles.home__explore}>
              <h1>Explore</h1>
            </article>
          </section>
        </main>
      </LayoutPage>
    </>
  )
}
