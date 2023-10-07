
import React, { FormEvent } from "react";
import styles from  './TaskList.module.css'
import { Button } from "../../../Button/Button";
import { Task } from "./Task/Task";


interface ITaskList{
    list?: React.ReactNode;
}
export function TaskList({list}:ITaskList){

    function handleSubmit(e:FormEvent){
        e.preventDefault()
    }
    return (
        <div className={styles.container}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Название задачи" />
                <Button type="green" onClick={()=>{console.log('Add')}}>Добавить</Button>
            </form>
            <ul className={styles.list}>
                <Task tomatoCounter={1} >Элемент 1 </Task>
                <Task tomatoCounter={1} >Элемент 1 </Task>
                <Task tomatoCounter={1} >Элемент 1 </Task>
                <Task tomatoCounter={1} >Элемент 1 </Task>
                
                
                
            </ul>
        </div>
    )
}