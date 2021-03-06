import React from 'react'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Styles from './login.styles.scss'

const Login = () => {
  
  return (
    <div className={Styles.loginWrap}>
      <LoginHeader />
      <form className={Styles.form} >
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
        <a href="/signup" className={Styles.link}>Criar conta</a>
        <div className={Styles.errorWrapper}>
          <span className={Styles.error}>Error</span>
        </div>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login