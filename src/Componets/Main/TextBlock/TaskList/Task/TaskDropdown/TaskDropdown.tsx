
import React, { ReactElement, useEffect, useRef, useState } from "react";
import styles from  './TaskDropdown.module.css'
import { DropdownSvg } from "../../../../../../SVG/DropdownSvg";
import { TaskDropdownItem } from "./TaskDropdownItem/TaskDropdownItem";
import { PlusSvg } from "../../../../../../SVG/PlusSvg";
import { MinusSvg } from "../../../../../../SVG/MinusSvg";
import { RedactSvg } from "../../../../../../SVG/RedactSvg";
import { DeleteSvg } from "../../../../../../SVG/DeleteSvg";
import { $TaskList, ITask, changeTomatos, deleteTask } from "../../../../../../effector/taskList";
import { useStore } from "effector-react/compat";


interface ITaskDropdown{
    id: number;
}

export function TaskDropdown({id}:ITaskDropdown){
    const task = useStore($TaskList).list.filter(task=>task.key === id)[0];

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null);

    function handleClick(){
        setIsOpen(!isOpen);
        
    }
    function handleClose(){
        setIsOpen(false);
    }
    function handleAdd(){

        changeTomatos({id: id, change: 1});
    }
    function handleMinus(){
        changeTomatos({id: id, change: -1});
    }
    function handleDelete(){
        deleteTask(task.key);
        handleClose();
    }

    useEffect(()=>{
        function handleClick(event: MouseEvent){
            if(event.target instanceof Node && !ref.current?.contains(event.target)){
                handleClose()
            }
        }
        document.addEventListener('click', handleClick)
        return ()=>{
            document.removeEventListener('click', handleClick);
        }
    }, [ref ])
    
   

    return (
       <div className={styles.container} ref = {ref}>

        <button className={styles.btn} onClick={handleClick} > <DropdownSvg/> </button>

        {isOpen&&<ul className={styles.DropdownList}>
            <TaskDropdownItem onClick={handleAdd} icon= {<PlusSvg/>}>Увеличить</TaskDropdownItem>
            <TaskDropdownItem onClick={handleMinus} isDisabled={task.tomatos<=1} icon= {<MinusSvg/>}>Уменьшить</TaskDropdownItem>
            <TaskDropdownItem onClick={handleClose} icon= {<RedactSvg/>}>Редактировать</TaskDropdownItem>
            <TaskDropdownItem onClick={handleDelete} icon= {<DeleteSvg/>}>Удалить</TaskDropdownItem>
        </ul>}
    </div>
    )
}