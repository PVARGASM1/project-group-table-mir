import React from 'react'
import './Form.css'
import { Button } from '../Button'
import { data as testInfo } from '../../assets/data'

export const Form = ({
  showEditButtons,
  singleRow,
  setSingleRow,
  onAddRow
}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleRow({
      ...singleRow,
      [name]: value 
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newRow = {
      ...singleRow,
      id: singleRow.id ? singleRow.id : Date.now(),
    }
    const url = `${import.meta.env.VITE_API_BASE_URL}/data${singleRow.id ? `/${singleRow.id}` : ''}`
    const configFetch = {
      method: singleRow.id ? 'PUT' : 'POST',
      body: JSON.stringify(newRow),
      headers: {
        'Content-Type': 'application/json'
      },
    }

      try{
        const response = await fetch(url, configFetch)
        const users = await response.json();
        onAddRow(users.data);

      } catch(error){
        setErrorMessage(`Ups, something went wrong. Error: ${error}`)
      }finally{
        setSingleRow({
          name: '',
          color: '',
          category: '',
          price: '',
        })
      }
  }

  const handleDeleteInfo = () => {
    setSingleRow({
      name: '',
      color: '',
      category: '',
      price: '',
    })
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="product-info">
        <label htmlFor="name">Product name</label>
        <input 
          type="text"
          id='name'
          name='name'
          className='input'
          placeholder='your product name'
          onChange={handleChange}
          value={singleRow.name}
          required
        />
      </div>

      <div className="product-info">
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id='color'
          name='color'
          className='input'
          placeholder='silver, black, white, etc'
          onChange={handleChange}
          value={singleRow.color}
          required
        />
      </div>

      <div className="product-info">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
          className='input select'
          required
        >
          <option value={singleRow.category}>--Please choose an option--</option>
          {
            testInfo?.map((categories, index) => (
              <option key={index} value={categories.category}>{categories.category}</option>
            ))
          }
        </select>
      </div>

      <div className="product-info">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id='price'
          name='price'
          className='input'
          placeholder='$1999,99'
          onChange={handleChange}
          value={singleRow.price}
          required
        />
      </div>

      <div className="button-option">
        {
          showEditButtons ?
          <div className="buttons-edit">
            <Button onClick={handleDeleteInfo}
              value={'Cancel'}
              color={'gray-color'}
            />
            <Button 
             onClick={handleSubmit} 
             value={'Update'}
             color={'green-color'}
             />
          </div> :
          <Button 
            type="submit"
            onClick={handleSubmit}
          />
        }
      </div>

    </form>
  )
}
