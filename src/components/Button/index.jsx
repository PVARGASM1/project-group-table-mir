import React from 'react'
import './Button.css'

export const Button = ({ color = 'blue-color', value = 'Add' }) => {
  return (
    <>
      <button className={color}>{value}</button>
    </>
  )
}
