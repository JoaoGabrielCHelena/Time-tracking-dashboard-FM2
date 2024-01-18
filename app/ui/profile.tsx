'use client'

import Image from '@/node_modules/next/image'
import styles from '../page.module.css'


export default function Profile({ setTimeFrame, timeFrame}) {
    return (
        <>
        <div className={styles.mainBlock} id={styles.profile}>
            <div className={styles.specialBlock}>
                <div className={styles.profileContentWrapper}>
                    <Image
                        src='/image-jeremy.png'
                        className={styles.img}
                        width={86}
                        height={86}
                        alt="Profile Picture"
                    />
                        
                        <div>
                            <p>Report for</p>
                            <h1>Jeremy Robson</h1>
                        </div>
                    </div>
            </div>
            <div className={styles.profileContentWrapper}>
                <input type={"radio"} name={"timeframe"} id={"daily"} onClick={ () => setTimeFrame('daily')}/>
                <label htmlFor='daily'>Daily</label>
                <input type={"radio"} name={"timeframe"} id={"weekly"} onClick={ () => setTimeFrame('weekly')} defaultChecked/>
                <label htmlFor='weekly'>Weekly</label>
                <input type={"radio"} name={"timeframe"} id={"monthly"} onClick={ () => setTimeFrame('monthly')} />
                <label htmlFor='monthly'>Monthly</label>
            </div>
        </div>
        </>
    )
}