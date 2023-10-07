
import React, { ReactElement } from "react";
import styles from  './TaskDropdownItem.module.css'


interface TaskDropdownItem{
    children?: React.ReactNode;
    onClick: ()=>void;
    icon: ReactElement;
}
export function TaskDropdownItem({children, icon, onClick}:TaskDropdownItem){
    return (
        <button onClick={onClick} className={styles.container}>
            <span className={styles.icon}> {icon}</span>
            <span className={styles.name}>{children}</span>
        </button>
    )
}