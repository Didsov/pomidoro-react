
import React from "react";
import styles from  './Logo.module.css'
import { LogoSvg } from "../../../SVG/LogoSvg";

interface Logo{
    
}
export function Logo(){
    return (
        <a className={styles.container} href="#logo">
            <LogoSvg/>
            <p className={styles.logoTitle}>pomodoro_box</p>


            
        </a>
    )
}