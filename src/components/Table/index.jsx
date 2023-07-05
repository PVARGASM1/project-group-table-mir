import { useState, useEffect } from 'react'
import './Table.css'

export const Table = () => {
  const [ info, setInfo ] = useState()

  const getData = async () => {
    const url = 'https://rickandmortyapi.com/api/character'
    const res = await fetch(url)
    const data = await res.json()
    setInfo([...data.results, info])
    console.log([...data.results]);
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
            info.map((row, index) => {
              return (
                <tr className='row-table' key={index}>
                  <td className='product-letter pad-row-2'>{row.name}</td>
                  <td className='table-letter pad-row-2'>{row.status}</td>
                  <td className='table-letter pad-row-2'>{row.species}</td>
                  <td className='table-letter pad-row-2'>${row.type}</td>
                  <td className='pad-row-2'>{row.gender}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
