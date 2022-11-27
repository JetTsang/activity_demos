import React from 'react'
import Banner from '../../assets/img/banner.jpg'
import styles from './top.module.scss'
export default function top() {
  return (
    <div className={styles.top}> 
        <img src={Banner}/>
    </div>
  )
}
