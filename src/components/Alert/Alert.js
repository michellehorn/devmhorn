import React from 'react'
import { AlertTag } from './style'

function Alert({ message, type }) {
  if (!message || !type) return null;
  return (
    <AlertTag type={type}>
      {message}
    </AlertTag>
  )
}
export default Alert;