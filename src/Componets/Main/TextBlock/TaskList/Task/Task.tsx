
import React from "react";
import styles from  './Task.module.css'
import { TaskDropdown } from "./TaskDropdown/TaskDropdown";
import { DropdownSvg } from "../../../../../SVG/DropdownSvg";


interface ITask{
    tomatoCounter: number;
    name: React.ReactNode;
    id: number;
}
export function Task({name, tomatoCounter, id}:ITask){
        
    return (
        <li className={styles.container}>
            <span className={styles.counter}>{tomatoCounter}</span>
            <span className={styles.taskName}> {name} </span>
            <TaskDropdown id={id}/>
            
            
        </li>
    )
}