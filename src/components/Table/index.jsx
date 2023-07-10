import React from 'react'
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
  setErrorMessage,
}) => {

  const handleShowEditButtons = (product) => {
    setShowEditButtons(true)
    setShowForm(true)
    setSingleRow(product)
  }

  const handleDeleteRow = async (id) => {

    const url = `http://localhost:3000/data/${id}`
    const configFetch = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }

    try {
      await fetch(url, configFetch);
      const updatedDataAPI = dataAPI.filter((row) => row.id !== id);
      setDataAPI(updatedDataAPI);
      
    } catch(error){
        setErrorMessage(`Ups, something went wrong. Error: ${error}`)
      }
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
                <th className='pad-row section-secondary'>OPTIONS</th>
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
              {
                dataAPI.length === 0 &&
                <tr>
                  <td colSpan="5">
                    <p>There's no data in this table, to add items click on the "Add" button.</p>
                    <img src="https://media.tenor.com/J3mNIbj6A4wAAAAM/empty-shelves-john-travolta.gif" alt="Empty table" />
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </>
  )
}
