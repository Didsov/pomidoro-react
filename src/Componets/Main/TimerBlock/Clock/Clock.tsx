
import React from "react";
import styles from  './Clock.module.css'
import { AddSvg } from "../../../../SVG/AddSvg";
import { useStore } from "effector-react";
import { $storeTimer, eventTimerPlus } from "../../../../effector/timer";


interface Clock{
    children?: React.ReactNode;
}

function secToMin(sec:number)  :string {
    let minute = Math.floor(sec / 60);
    let  second = sec % 60;
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
        if(timer <= 3540) eventTimerPlus(OFFSET);
        
        
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