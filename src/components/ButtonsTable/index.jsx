import React from 'react'
import './ButtonsTable.css'

export const ButtonsTable = ({ optionButton, onClick }) => {
  return (
    <>
      <button onClick={onClick} className='buttons-table'>{optionButton}</button>
    </>
  )
}
