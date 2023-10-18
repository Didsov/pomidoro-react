
import React, {useEffect, useRef} from "react";
import styles from  './Clock.module.css'
import { AddSvg } from "../../../../SVG/AddSvg";
import { useStore } from "effector-react";
import { $storeTimer, ITimer, changeIsModeWork, changeWorkTime, endCycle, initCurSec, setLongRest, tick } from "../../../../effector/timer";
import { $TaskList, completeTomato } from "../../../../effector/taskList";
import classNames from "classnames";
import { $history, addPauseTime, addTomatos, addWorkTime, getNow } from "../../../../effector/history";


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
    let task = taskList.list.filter((task=>{
        return task.key === taskId
    }))[0];
    let completeTomatos = task?.completeTomatos?task.completeTomatos: 0;
    let nextTomato = useRef(completeTomatos);
    const history = useStore($history);
    const OFFSET = 60;
    let time = secToMin(timer.curSec);

   
    function handleTick(){
        if(timer.isInProcess){

            if(!timer.isPause){
                if(timer.isModeWork) {
                    addWorkTime(getNow());
                }
                tick();
            }else{
                addPauseTime(getNow());
                

            }
            

        }
    }
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(!timer.isInProcess) return
            if(timer.curSec <=0){
                if(timer.isModeWork){
                    changeIsModeWork(!timer.isModeWork);
                    nextTomato.current += 1;
                    completeTomato(taskId);
                    if(completeTomatos%4 === 0){
                        setLongRest()
                    }
                    addTomatos(getNow());

                }else{
                    changeIsModeWork(!timer.isModeWork);
                    endCycle();


                }
                 return
            }
            handleTick();
        }, 1000)
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