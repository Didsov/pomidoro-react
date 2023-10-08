
import React from "react";
import styles from  './Grafic.module.css'
import { Day } from "./Day/Day";
import classNames from "classnames";


interface IGrafic{
}
export function Grafic({}:IGrafic){
    return (
        <div className={styles.container}>
            <div className={styles.week}>
                <Day minutes={50} isActive = {false}> Пн </Day>
                <Day minutes={25} isActive = {true}> Вт </Day>
                <Day minutes={37} isActive = {false}> Ср </Day>
                <Day minutes={150} isActive = {false}> Чт </Day>
                <Day minutes={0.5} isActive = {false}> Пт </Day>
                <Day minutes={200} isActive = {false}> Сб </Day>
                <Day minutes={100} isActive = {false}> Вс </Day>
                <span className={classNames(styles.layout, styles.first)} id={'1'}>25 мин</span>
                <span className={classNames(styles.layout, styles.second)} id={'2'}>50 мин</span>
                <span className={classNames(styles.layout, styles.third)} id={'3'}>1ч 15 мин</span>
                <span className={classNames(styles.layout, styles.fourth)} id={'4'}>1ч 40 мин</span>
            </div>
            <div className={styles.footer}>

            </div>
        </div>
    )
}