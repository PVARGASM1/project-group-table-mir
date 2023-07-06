import React, { useState, useEffect } from 'react'
import { ButtonsTable } from '../ButtonsTable'
import './Table.css'

export const Table = ({ 
  onClick,
  dataAPI,
}) => {
  return (
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
            dataAPI?.map((row) => (
              <tr key={row.id} className='row-table'>
                <td className='product-letter pad-row-2'>{row.name}</td>
                <td className='table-letter pad-row-2'>{row.color}</td>
                <td className='table-letter pad-row-2'>{row.category}</td>
                <td className='table-letter pad-row-2'>${row.price}</td>
                <td className='pad-row-2'>
                  <ButtonsTable
                    optionButton={'Edit'}
                    onClick={() => onClick(row)}
                  /> | 
                  {' '}
                  <br className='white-space' />

                  <ButtonsTable 
                    optionButton={'Delete'}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
