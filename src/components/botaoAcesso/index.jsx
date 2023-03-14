import React from 'react'
import styles from './botaoAcesso.module.scss'

export default function BotaoAcesso(props) {
  return (
    <button className={styles.button}>{props.titulo}</button>
  )
}
