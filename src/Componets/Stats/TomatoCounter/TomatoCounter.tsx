
import React from "react";
import styles from  './TomatoCounter.module.css'
import { LogoSvg } from "../../../SVG/LogoSvg";
import { TomatoSvg } from "../../../SVG/TomatoSvg";


interface TomatoCounter{
    count: number;
}
export function TomatoCounter({count}:TomatoCounter){
    const isNoTomato = count == 0;
    const wordEnd = 'а';
    const counterText = count + ' помидор' + wordEnd;

    return (
        <div className={styles.container} >
            {!isNoTomato && (<><div className={styles.holder}>
                <LogoSvg/>
                <span className={styles.counter}>x {count}</span> 
            </div>
            <div className={styles.footer}>
                {counterText}
            </div></>)}
            {isNoTomato && <TomatoSvg/>}
        </div>
    )
}