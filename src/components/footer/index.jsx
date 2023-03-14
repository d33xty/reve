import React from 'react'
import Logo from '../logo'
import {BiRegistered} from 'react-icons/bi'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Logo className={styles.footer_logo} cor='#FFF'></Logo>
        <div className={styles.footer_text_container}>
            <p className={styles.footer_text_}><BiRegistered></BiRegistered>revê industry</p>
            <p>Develoment by: Eduardo (d33xty)</p>
        </div>
    </footer>
  )
}
