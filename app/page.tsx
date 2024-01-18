'use client'

import Block from './ui/block'
import Profile from './ui/profile'
import styles from './page.module.css'
import { useState } from 'react'
import Attribution from './ui/attribution'

export default function Home() {
  const [timeFrame, setTimeFrame] = useState('weekly')

  return (
    <>
    <main className={styles.wrapper}>
      <Profile setTimeFrame={setTimeFrame} timeFrame={timeFrame} />
      <Block dataIndex={0} title="Work" timeFrame={timeFrame} />
      <Block dataIndex={1} title="Play" timeFrame={timeFrame}/>
      <Block dataIndex={2} title='Study' timeFrame={timeFrame}/>
      <Block dataIndex={3} title='Exercise' timeFrame={timeFrame}/>
      <Block dataIndex={4} title='Social' timeFrame={timeFrame}/>
      <Block dataIndex={5} title='Self Care' timeFrame={timeFrame}/>
    </main>
    <Attribution />
    </>
  )
}
