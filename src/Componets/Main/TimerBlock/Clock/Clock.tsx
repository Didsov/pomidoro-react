
import React from "react";
import styles from  './Clock.module.css'
import { AddSvg } from "../../../../SVG/AddSvg";


interface Clock{
    children?: React.ReactNode;
}
export function Clock({children}:Clock){
    return (
        <div className={styles.container}>
            <p className={styles.clock}>{children}</p>
            <button className={styles.add}>
                <AddSvg/>
            </button>
        </div>

    )
}