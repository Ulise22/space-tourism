import LayoutPage from "@/components/LayoutPage";
import styles from './Technology.module.css'
import Image from "next/image";
import { useState } from "react";

export default function Technology () {
    const [tecIndex, setTecIndex] = useState(2)
    return(
        <LayoutPage title="- Technology">
            <main className={styles.technology}>
                <div className={tecIndex == 0 ? `${styles.firstImage}` : tecIndex == 1 ? `${styles.secondImage}` : `${styles.thirdImage}`}></div>
            </main>
        </LayoutPage>
    )
}