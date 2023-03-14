import React from 'react'
import style from './logo.module.scss'

export default function Logo({cor}) {
  return (
    <p className={style.logo}>revê<span style={{borderColor: {cor}}}>industry</span></p>
  )
}
