
import styles from  './TimerBlock.module.css'
import { Clock } from "./Clock/Clock";
import { Button } from "../../Button/Button";
import { useStore } from 'effector-react';
import { $storeTimer } from '../../../effector/init';



export function TimerBlock(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.taskHead}>Сверстать сайт</p>
                <p className={styles.counter}>Помидор 1</p>
            </div>
            <div className={styles.main}>

            <Clock/>
            <p className={styles.task}>
                <span className={styles.taskNumber} > Задача 1 - </span> <span className={styles.taskName}>Сверстать сайт</span>
            </p>
            <div className={styles.control}>
                <Button onClick={()=>{}} type='green'>Старт</Button>
                <Button onClick={()=>{}}>Стоп</Button>
            </div>
            </div>
        </div>
    )
}