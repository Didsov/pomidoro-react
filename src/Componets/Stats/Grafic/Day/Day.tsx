
import React from "react";
import styles from  './Day.module.css'
import classNames from "classnames";


interface IDay{
    minutes?: number;
    isActive?: boolean;
    children: React.ReactNode;
}

const MAX = 205;
export function Day({minutes, isActive, children}:IDay){
    minutes = minutes?minutes:0;
    isActive = isActive?isActive:false;
    let height = minutes / MAX * 100; 
    let disable = false;
    const color = isActive? '#DC3E22': '#EA8979';
    if(height > 100 ){
        height = 100;
    }
    if (height < 1){
        disable = true;
    }
    const H = {
        'background' : color,
        'height' : height + '%',
    }


    return (
        <div className={classNames(styles.day)} style={disable?{}:H} >
            <div className={classNames(styles.dayName, {[styles.today]: isActive})}>{children}</div>
        </div>
    )
}