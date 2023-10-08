
import React from "react";
import styles from  './Stats.module.css'
import { Wrapper } from "../Wrapper/Wrapper";
import classNames from "classnames";
import { StatsDropdown } from "./StatsDropdown/StatsDropdown";
import { PlateStats } from "./PlateStats/PlateStats";
import { TotalTime } from "./TotalTime/TotalTime";
import { TomatoCounter } from "./TomatoCounter/TomatoCounter";
import { Grafic } from "./Grafic/Grafic";

export function Stats(){
    return (
        <Wrapper>
            <div className={styles.stats}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Ваша активность</h2>
                    <StatsDropdown/>
                </div>
                <div className={styles.grafs}>
                    <div className={styles.sideBar}>
                        
                        <TotalTime/>
                        <div className={styles.tomatoCounter}>
                            <TomatoCounter count={2}/>
                        </div>
                        
                    </div>
                    <div className={styles.graficContainer}>
                        <Grafic/>
                    </div>

                </div>
                <div className={styles.Plates}>
                    <PlateStats type='focus' data={1/2}/>
                    <PlateStats type ='pause' data={15}/>
                    <PlateStats type='stop' data={3}/>
                </div>
            </div>
        </Wrapper>
    )
}