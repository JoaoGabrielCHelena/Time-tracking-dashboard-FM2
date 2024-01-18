'use client'

import Block from './ui/block'
import Profile from './ui/profile'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [timeFrame, setTimeFrame] = useState('weekly')

  return (
    <main className={styles.wrapper}>
      <Profile setTimeFrame={setTimeFrame} timeFrame={timeFrame} />
      <Block dataIndex={0} Category="Work" title="Work" timeFrame={timeFrame} />
      <Block dataIndex={1} Category="Play" title="Play" timeFrame={timeFrame}/>
      <Block dataIndex={2} Category="Study" title='Study' timeFrame={timeFrame}/>
      <Block dataIndex={3} Category="Exercise" title='Exercise' timeFrame={timeFrame}/>
      <Block dataIndex={4} Category="Social" title='Social' timeFrame={timeFrame}/>
      <Block dataIndex={5} Category="SelfCare" title='Self Care' timeFrame={timeFrame}/>
    </main>
  )
}
