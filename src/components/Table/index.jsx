import React, { useState, useEffect } from 'react'
import { ButtonsTable } from '../ButtonsTable'
import './Table.css'

export const Table = ({onClick}) => {
  const [ info, setInfo ] = useState()

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    setInfo(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='content-table'>
      <table className='table'>
        <thead className='header-table'>
          <tr>
            <th className='col-1 pad-row'>PRODUCT NAME</th>
            <th className='col-2 pad-row'>COLOR</th>
            <th className='col-2 pad-row'>CATEGORY</th>
            <th className='col-2 pad-row'>PRICE</th>
            <th className='col-2 pad-row'></th>
          </tr>
        </thead>
        <tbody>
          {
            info.map((row) => (
              <React.Fragment key={row.id}>
                <tr className='row-table'>
                  <td className='product-letter pad-row-2'>{row.email}</td>
                  <td className='table-letter pad-row-2'>{row.username}</td>
                  <td className='table-letter pad-row-2'>{row.name}</td>
                  <td className='table-letter pad-row-2'>${row.website}</td>
                  <td className='pad-row-2'>
                    <ButtonsTable optionButton={'Edit'} onClick={onClick} /> | 
                    <br />
                    <ButtonsTable optionButton={'Delete'} />
                  </td>
                </tr>
              </React.Fragment>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
