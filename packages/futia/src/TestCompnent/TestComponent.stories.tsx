import React from 'react'
import TestComponent from './TestComponent'

export default {
  title: 'Test Component',
}

export const Basic = () => <TestComponent text="hello world" />

export const Disabled = () => <TestComponent text="Under Construction" />
