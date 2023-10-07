
import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import styles from  './Main.module.css'


interface Main{
    children?: React.ReactNode;
}
export function Main({children}:Main){
    return (
        <Wrapper>
            <div className={styles.main}>
                {children}
            </div>
        </Wrapper>
    )
}