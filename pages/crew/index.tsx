import LayoutPage from "@/components/LayoutPage";
import data from '../../components/data.json';
import { useState } from "react";
import { pictures } from "./pictures";
import Image from "next/image";
import styles from './Crew.module.css'

export default function Crew () {
    const info = data.crew;
    const [infoIndex, setInfoIndex] = useState(0);

    return(
        <LayoutPage title="- Crew">
            <main className={styles.crew}>
                <section className={styles.crew__container}>
                    <h3 className={styles.crew__pageTitle}> <span>02</span> MEET YOUR CREW </h3>
                    <div className={styles.crew__member__container}>
                        <article className={styles.crew__member}>
                            <h2 className={styles.crew__member__role}> {info[infoIndex].role} </h2>
                            <h1 className={styles.crew__member__name}> {info[infoIndex].name} </h1>
                            <p className={styles.crew__member__bio}> {info[infoIndex].bio} </p>

                            <ul className={styles.crew__member__btn__container}>
                                <li> 
                                    <button 
                                    className={infoIndex == 0 ? 
                                    `${styles.crew__member__btn} ${styles.activeBtn}` 
                                    : 
                                    `${styles.crew__member__btn}`} onClick={() => setInfoIndex(0)}>
                                    </button> 
                                </li>
                                <li> 
                                    <button 
                                    className={infoIndex == 1 ? 
                                    `${styles.crew__member__btn} ${styles.activeBtn}` 
                                    : 
                                    `${styles.crew__member__btn}`} onClick={() => setInfoIndex(1)}>
                                    </button> 
                                </li>
                                <li> 
                                    <button 
                                    className={infoIndex == 2 ? 
                                    `${styles.crew__member__btn} ${styles.activeBtn}` 
                                    : 
                                    `${styles.crew__member__btn}`} onClick={() => setInfoIndex(2)}>
                                    </button> 
                                </li>
                                <li> 
                                    <button 
                                    className={infoIndex == 3 ? 
                                    `${styles.crew__member__btn} ${styles.activeBtn}` 
                                    : 
                                    `${styles.crew__member__btn}`} onClick={() => setInfoIndex(3)}>
                                    </button> 
                                </li>
                            </ul>
                        </article>
                        <article className={styles.crew__image__container}>
                            <Image className={styles.crew__image} src={pictures[infoIndex]} alt="crew" />

                            <span className={styles.crew__line}></span>
                        </article>
                    </div>
                </section>
            </main>
        </LayoutPage>
    )
}