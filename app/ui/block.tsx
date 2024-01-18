'use client'

import styles from '../page.module.css'
import data from "../data.json"


export default function Block({ dataIndex, title, timeFrame }: { dataIndex: number, title: string, timeFrame: string }) {  
    function pluralCheck(input:number) {
        return input == 1 ? "hr" : "hrs"
    }

    const currentNum:number = data[dataIndex].timeframes[timeFrame as keyof object]['current' as keyof object]
    const currentStr:string = `${currentNum}${pluralCheck(currentNum)}`

    const previousNum:number = data[dataIndex].timeframes[timeFrame as keyof object]['previous' as keyof object]
    const previousStr:string = `last week - ${previousNum}${pluralCheck(previousNum)}`

    const category:string = data[dataIndex].title

    return (
        <>
        <div id={`${styles[category]}`} className={`${styles.category} ${styles.specialBlock}`}>
            <div className={styles.mainBlock}>
            <h1>{title}</h1>
            <img alt="options" src='./icon-ellipsis.svg' />
            <div className={styles.hours}>{currentStr}</div>
            <div className={styles.previous}>{previousStr}</div>
            </div>
        </div>
      </>
    )
}