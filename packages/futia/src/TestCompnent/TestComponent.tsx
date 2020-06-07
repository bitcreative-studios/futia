import React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

const TestComponent: React.FC<Props> = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default TestComponent
