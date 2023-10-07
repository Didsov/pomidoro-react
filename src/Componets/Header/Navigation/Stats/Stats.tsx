
import React from "react";
import styles from  './Stats.module.css'
import { StatsSvg } from "../../../../SVG/StatsSvg";


export function Stats(){
    return (
        <a href="#" className={styles.container}>
            <StatsSvg/>
            <p className={styles.title}>Статистика</p>
        </a>
    )
}