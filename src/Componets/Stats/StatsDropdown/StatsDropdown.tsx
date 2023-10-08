
import React, {useState} from "react";
import styles from  './StatsDropdown.module.css'
import { ArrowSvg } from "../../../SVG/ArrowSvg";
import { StatsDropdownItem } from "./StatsDropdownItem/StatsDropdownItem";
import classNames from "classnames";


interface StatsDropdown{
    children?: React.ReactNode;
}
export function StatsDropdown(){
    const [isOpen, SetIsOpen] = useState(false);
    function handleOpen(){
        SetIsOpen(!isOpen);
    }
    return (
        <div className={styles.container}>
            <div className={styles.topList}>
                <StatsDropdownItem onClose={handleOpen}> Эта неделя </StatsDropdownItem>    
             </div>
            <button className={classNames({[styles.arrow]: true, [styles.rotate]:isOpen })} onClick={handleOpen}><ArrowSvg/></button>
            {isOpen &&<div className={styles.dropDown}>
            <StatsDropdownItem onClose={handleOpen}> Прошлая неделя </StatsDropdownItem>    
            <StatsDropdownItem onClose={handleOpen}> 2 недели назад </StatsDropdownItem>    
            </div>}
            
        </div>
    )
}