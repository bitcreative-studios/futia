import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

const TestComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default TestComponent
