
import React, {useEffect, useRef} from "react";
import styles from  './Clock.module.css'
import { AddSvg } from "../../../../SVG/AddSvg";
import { useStore } from "effector-react";
import { $storeTimer, ITimer, changeIsModeWork, changeWorkTime, endCycle, initCurSec, tick } from "../../../../effector/timer";
import { $TaskList, completeTomato } from "../../../../effector/taskList";
import classNames from "classnames";


interface Clock{
    taskId: number;
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

export function Clock({taskId}:Clock){
    const timer = useStore($storeTimer);
    const taskList = useStore($TaskList);

    const OFFSET = 60;
    let time = secToMin(timer.curSec);
    let left = useRef(0);

    function handeTomatoEnd( ){
        changeIsModeWork(!timer.isModeWork);
        completeTomato(taskId);
        endCycle();

    
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(timer.isPause) return
            if(timer.curSec <=0){
                if(timer.isModeWork){
                    changeIsModeWork(!timer.isModeWork);
                }else{
                    handeTomatoEnd();

                }
                 return
            }
            tick();
        }, 750)
        return(()=> clearInterval(interval))
    }, [timer])
    function handlerAdd(){
        if(timer.workTime <= 3540) changeWorkTime(OFFSET);
        
        
    }
    return (
        <div className={styles.container}>
            <p className={classNames(styles.clock, {[styles.work]: timer.isModeWork, [styles.rest]: !timer.isModeWork, [styles.pause]: timer.isPause})}>{time}</p>
            <button className={styles.add} onClick={handlerAdd}>
                <AddSvg/>
            </button>
        </div>

    )
}