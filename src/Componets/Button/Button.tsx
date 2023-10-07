
import React, { CSSProperties } from "react";
import styles from  './Button.module.css'
import classNames from "classnames";


interface IButton{
    type?: 'red' | 'green',
    onClick : ()=>void,
    style?: string;
    children?: React.ReactNode;
}
export function Button({onClick, style, type, children }:IButton){
    const color = type?type:'disable';
    const isGreen = type == 'green';
    
    return (
        <button className={classNames(styles.btn, styles[color])} onClick={onClick}>
            {children}
        </button>
    )
}