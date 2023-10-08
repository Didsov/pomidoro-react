
import React from "react";
import styles from  './StatsDropdownItem.module.css'


interface StatsDropdownItem{
    children?: React.ReactNode;
    onClose: ()=>void;
}
export function StatsDropdownItem({children, onClose}:StatsDropdownItem){
    return (
        <button className={styles.btn} onClick={onClose}>
            {children}
        </button>
    )
}