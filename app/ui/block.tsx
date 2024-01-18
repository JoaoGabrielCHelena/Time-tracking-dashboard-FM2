'use client'

import styles from '../page.module.css'
import data from "../data.json"


export default function Block({ dataIndex, Category, title, timeFrame }: { dataIndex: number, Category: string, title: string, timeFrame: string }) {  
    function pluralCheck(input:number) {
        return input == 1 ? "hr" : "hrs"
    }
    const currentNum:number = data[dataIndex].timeframes[timeFrame as keyof object].current
    const currentStr:string = `${currentNum}${pluralCheck(currentNum)}`
    const previousNum:number = data[dataIndex].timeframes[timeFrame as keyof object].previous
    const previousStr:string = `last week - ${previousNum}${pluralCheck(previousNum)}`
    return (
        <>
        <div id={`${styles[Category]}`} className={`${styles.category} ${styles.specialBlock}`}>
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