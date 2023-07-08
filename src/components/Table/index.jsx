import React from 'react'
import { useState } from 'react'
import { ButtonsTable } from '../ButtonsTable'
import './Table.css'

export const Table = ({ 
  dataAPI,
  setDataAPI,
  loading,
  errorMessage,
  setShowEditButtons,
  setShowForm,
  setSingleRow,
}) => {

  const handleShowEditButtons = (product) => {
    setShowEditButtons(true)
    setShowForm(true)
    setSingleRow(product)
  }

  const handleDeleteRow = (id) => {
    const updatedDataAPI = dataAPI.filter((row) => row.id !== id);
    setDataAPI([...updatedDataAPI])
  };
  
  
  if (errorMessage !== null) {
    <div>{errorMessage}</div>
  }

  return (
    <>
      {
        loading ?
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> :
        <div className='content-table'>
          <table className='table'>
            <thead className='header-table'>
              <tr>
                <th className='pad-row section-main'>PRODUCT NAME</th>
                <th className='pad-row section-secondary'>COLOR</th>
                <th className='pad-row section-secondary'>CATEGORY</th>
                <th className='pad-row section-secondary'>PRICE</th>
                <th className='pad-row section-secondary'></th>
              </tr>
            </thead>
            <tbody>
              {
                dataAPI.map((row) => (
                  <tr key={row.id} className='row-table'>
                    <td className='product-letter pad-row-2'>{row.name}</td>
                    <td className='table-letter pad-row-2'>{row.color}</td>
                    <td className='table-letter pad-row-2'>{row.category}</td>
                    <td className='table-letter pad-row-2'>${parseFloat(row.price).toFixed(2)}</td>
                    <td className='pad-row-2'>
                      <ButtonsTable
                        optionButton={'Edit'}
                        onClick={() => handleShowEditButtons(row)}
                      /> | 
                      {' '}
                      <br className='white-space' />

                      <ButtonsTable 
                        optionButton={'Delete'}
                        onClick={() => handleDeleteRow(row.id)}
                      />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      }
    </>
  )
}
