
import React from "react";
import styles from  './StatsLink.module.css';
import {Link } from 'react-router-dom';
import { StatsSvg } from "../../../../SVG/StatsSvg";


export function StatsLink(){
    return (
        <Link to='/stats' className={styles.container}>
            <StatsSvg/>
            <p className={styles.title}>Статистика</p>
        </Link>
    )
}