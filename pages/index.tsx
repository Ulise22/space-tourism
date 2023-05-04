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
              <div className={styles.home__article__container}>
                <h4 className={styles.home__article__headTitle}>SO, YOU WANT TO TRAVEL TO</h4>
                <h1 className={styles.home__article__title}>SPACE</h1>
                <p className={styles.home__article__text}>Let´s face it, if you want to go to space, you might as well 
                  genuinely go to outer space and not hover kind of on the 
                  edge of it. Well sit back and relax because we´ll give you a 
                  truly out of this world experience!
                </p>
              </div>
            </article>

            <article className={styles.home__explore}>
              <div className={styles.home__explore__btn}>
                <h1 className={styles.home__explore__btn__text}>EXPLORE</h1>
              </div>
              
            </article>
          </section>
        </main>
      </LayoutPage>
    </>
  )
}
