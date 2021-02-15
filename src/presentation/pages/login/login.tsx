import Spinner from '@/presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login.styles.scss'

const Login = () => {
  return (
    <div className={Styles.loginWrap}>
      <header>Header</header>
      <form className={Styles.form} >
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
        <a href="/signup" className={Styles.link}>Criar conta</a>
        <div className={Styles.errorWrapper}>
          <span className={Styles.error}>Error</span>
        </div>
        <Spinner />
      </form>
      <footer>Footer</footer>
    </div>
  )
}

export default Login