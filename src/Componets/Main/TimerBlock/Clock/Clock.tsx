
import React from "react";
import styles from  './Clock.module.css'
import { AddSvg } from "../../../../SVG/AddSvg";
import { useStore } from "effector-react";
import { $storeTimer, eventTimerPlus } from "../../../../effector/init";


interface Clock{
    children?: React.ReactNode;
}

function secToMin(sec:number)  :string {
    const minute = Math.floor(sec / 60);
    const second = sec % 60;
    let secNull = '';
    let minNull = '';
    if(second<10) secNull = '0';
    if(minute <10) minNull = '0'
    return minNull + minute + ':' + secNull + second;
}
export function Clock(){
    const timer = useStore($storeTimer)
    const OFFSET = 60;
    let time = secToMin(timer);

    function handlerAdd(){
        console.log('Click');
        
        eventTimerPlus(OFFSET);
    }
    return (
        <div className={styles.container}>
            <p className={styles.clock}>{time}</p>
            <button className={styles.add} onClick={handlerAdd}>
                <AddSvg/>
            </button>
        </div>

    )
}