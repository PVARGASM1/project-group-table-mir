import React from 'react'
import './Button.css'

export const Button = ({ color = 'blue-color', value = 'Add', onClick }) => {
  return (
    <>
      <button className={color} onClick={onClick}>{value}</button>
    </>
  )
}
