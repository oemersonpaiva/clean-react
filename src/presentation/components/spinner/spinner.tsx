import React from 'react'
import Styles from './spinner.styles.scss'


type SpinnerProps = React.HTMLAttributes<HTMLElement> & {
  isNegative?: boolean
}

const Spinner = ({ className }: SpinnerProps) => (
  <div className={[Styles.spinner, className].join(' ')}>
    <div />
    <div />
  </div>
)

export default Spinner
