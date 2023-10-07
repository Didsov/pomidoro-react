
import React from "react";
import styles from  './Task.module.css'
import { TaskDropdown } from "./TaskDropdown/TaskDropdown";
import { DropdownSvg } from "../../../../../SVG/DropdownSvg";


interface ITask{
    tomatoCounter: number;
    children?: React.ReactNode;
}
export function Task({children, tomatoCounter =1}:ITask){
    return (
        <li className={styles.container}>
            <span className={styles.counter}>{tomatoCounter}</span>
            <span className={styles.taskName}> {children} </span>
            <TaskDropdown/>
            
            
        </li>
    )
}