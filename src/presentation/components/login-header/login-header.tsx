import React, { memo } from 'react'
import { Logo } from '@/presentation/components'
import Styles from './login-header-styles.scss'

const LoginHeader = () => (
  <header className={Styles.headerWrap}>
    <Logo />
    <h1>4Dev - Enquetes para Programadores</h1>
  </header>
)


export default memo(LoginHeader)
