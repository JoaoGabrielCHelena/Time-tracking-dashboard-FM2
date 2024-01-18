'use client'

import styles from '../page.module.css'
import data from "../data.json"

export default function Block({ dataIndex, Category, title, timeFrame }: { dataIndex: number, Category: string, title: string, timeFrame: string }) {  
    return (
        <>
        <div id={`${styles[Category]}`} className={`${styles.category} ${styles.specialBlock}`}>
            <div className={styles.mainBlock}>
            <h1>{title}</h1>
            <img alt="options" src='./icon-ellipsis.svg' />
            <div className={styles.hours}>{data[dataIndex].timeframes[timeFrame].current}hrs</div>
            <div className={styles.previous}>last week - {data[dataIndex].timeframes[timeFrame].previous}hrs</div>
            </div>
        </div>
      </>
    )
}