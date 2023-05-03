import LayoutPage from "@/components/LayoutPage";
import styles from './Technology.module.css'
import data from '../../components/data.json'
import { useState } from "react";

export default function Technology () {
    const info = data.technology;
    const [techIndex, setTechIndex] = useState(0)
    return(
        <LayoutPage title="- Technology">
            <main className={styles.technology}>   
                <section className={styles.tech__container}>
                    <h2 className={styles.tech__pageTitle}> <span>03</span> SPACE LAUNCH 101 </h2>
                    <ul className={styles.tech__list}>
                        <li className={techIndex == 0 ? `${styles.tech__list__item} ${styles.techActive}` : `${styles.tech__list__item}`}
                        onClick={() => setTechIndex(0)}>
                            1
                        </li>
                        <li className={techIndex == 1 ? `${styles.tech__list__item} ${styles.techActive}` : `${styles.tech__list__item}`}
                        onClick={() => setTechIndex(1)}>
                            2
                        </li>
                        <li className={techIndex == 2 ? `${styles.tech__list__item} ${styles.techActive}` : `${styles.tech__list__item}`}
                        onClick={() => setTechIndex(2)}> 
                            3
                        </li>
                    </ul>

                    <article className={styles.tech__info}>
                        <h5 className={styles.tech__info__tag}> THE TERMINOLOGY... </h5>
                        <h1 className={styles.tech__info__name}> {info[techIndex].name} </h1>
                        <p className={styles.tech__info__desc}> {info[techIndex].description} </p>
                    </article>

                    <div className={techIndex == 0 ? `${styles.firstImage} ${styles.tech__image}` : techIndex == 1 ? `${styles.secondImage} ${styles.tech__image}` : `${styles.thirdImage} ${styles.tech__image}`}></div>
                </section>
            </main>
        </LayoutPage>
    )
}