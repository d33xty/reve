import React from 'react'
import styles from './header.module.scss'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import Logo from '../logo'

export default function Header() {
  return (
    <header className={styles.header__container}>
        <Logo cor='#000'></Logo>
        <nav className={styles.nav__menu}>
            <a href='-'>Home</a>
            <a href='-'>Contatcs</a>
            <a href='-'>Products</a>
        </nav>
        <nav className={styles.icons__container}>
            <AiFillInstagram className={styles.icons} size={25}></AiFillInstagram>
            <AiFillLinkedin className={styles.icons} size={25}></AiFillLinkedin>
            <TiSocialTwitter className={styles.icons} size={25}></TiSocialTwitter>
        </nav>
    </header>
  )
}
