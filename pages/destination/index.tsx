import LayoutPage from "@/components/LayoutPage";
import styles from './Destination.module.css'
import { useState } from "react";
import {pictures} from './pictures';
import Image from "next/image";
import data from '../../components/data.json';

export default function Destination () {
    const destinations = data.destinations;
    const [desIndex, setDesIndex] = useState(0);

    return(
        <LayoutPage title="- Destinations">
            <main className={styles.destination}>
                <div className={styles.destination__container}>
                    <section className={styles.destination__visual}>
                        <h2 className={styles.destination__visual__title}> <span>01</span> PICK YOUR DESTINATION </h2>

                        <Image className={styles.destination__visual__image} src={pictures[desIndex]} alt="planet" />
                    </section>

                    <section className={styles.destination__info}>
                        <ul className={styles.destination__info__list}>
                            <li className={desIndex == 0 ? `${styles.destination__info__list__item} ${styles.activeItem}` : `${styles.destination__info__list__item}`} onClick={() => setDesIndex(0)} >MOON</li>
                            <li className={desIndex == 1 ? `${styles.destination__info__list__item} ${styles.activeItem}` : `${styles.destination__info__list__item}`} onClick={() => setDesIndex(1)} >MARS</li>
                            <li className={desIndex == 2 ? `${styles.destination__info__list__item} ${styles.activeItem}` : `${styles.destination__info__list__item}`} onClick={() => setDesIndex(2)} >EUROPA</li>
                            <li className={desIndex == 3 ? `${styles.destination__info__list__item} ${styles.activeItem}` : `${styles.destination__info__list__item}`} onClick={() => setDesIndex(3)} >TITAN</li>
                        </ul>
                        <h1 className={styles.destination__info__title}> {destinations[desIndex].name} </h1>
                        <p className={styles.destination__info__text}> {destinations[desIndex].description} </p>

                        <span className={styles.destination__line}></span>

                        <article className={styles.destination__info__article}>
                            <div className={styles.destination__info__article__container}>
                                <p className={styles.destination__info__article__p}>AVG. DISTANCE</p>
                                <h4 className={styles.destination__info__article__stats}> {destinations[desIndex].distance} </h4>
                            </div>
                            <div className={styles.destination__info__article__container}>
                                <p className={styles.destination__info__article__p}>EST. TRAVEL TIME</p>
                                <h4 className={styles.destination__info__article__stats}> {destinations[desIndex].travel} </h4>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </LayoutPage>
    )
}