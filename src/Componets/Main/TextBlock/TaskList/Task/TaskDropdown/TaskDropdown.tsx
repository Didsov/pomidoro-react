
import React, { ReactElement, useState } from "react";
import styles from  './TaskDropdown.module.css'
import { DropdownSvg } from "../../../../../../SVG/DropdownSvg";
import { TaskDropdownItem } from "./TaskDropdownItem/TaskDropdownItem";
import { PlusSvg } from "../../../../../../SVG/PlusSvg";
import { MinusSvg } from "../../../../../../SVG/MinusSvg";
import { RedactSvg } from "../../../../../../SVG/RedactSvg";
import { DeleteSvg } from "../../../../../../SVG/DeleteSvg";



export function TaskDropdown(){
    useState    
    const [isOpen, setIsOpen] = useState(false)
    function handleClick(){
        setIsOpen(!isOpen);
        
    }
    function handleClose(){
        setIsOpen(false);
    }
    return (
       <div className={styles.container}>

        <button className={styles.btn} onClick={handleClick} > <DropdownSvg/> </button>

        {isOpen&&<ul className={styles.DropdownList}>
            <TaskDropdownItem onClick={()=>{}} icon= {<PlusSvg/>}>Увеличить</TaskDropdownItem>
            <TaskDropdownItem onClick={()=>{}} icon= {<MinusSvg/>}>Уменьшить</TaskDropdownItem>
            <TaskDropdownItem onClick={handleClose} icon= {<RedactSvg/>}>Редактировать</TaskDropdownItem>
            <TaskDropdownItem onClick={handleClose} icon= {<DeleteSvg/>}>Удалить</TaskDropdownItem>
        </ul>}
    </div>
    )
}