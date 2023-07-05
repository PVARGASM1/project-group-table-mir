import React from 'react'
import './Form.css'
import { Button } from '../Button'

export const Form = ({ option }) => {
  return (
    <form className='form'>
      <div className="product-info">
        <label htmlFor="name">Product name</label>
        <input type="text" id='name' className='input' placeholder='your product name' />
      </div>

      <div className="product-info">
        <label htmlFor="color">Color</label>
        <input type="text" id='color' className='input' placeholder='solver, black, white, etc' />
      </div>

      <div className="product-info">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" className='input select'>
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>

      <div className="product-info">
        <label htmlFor="price">Price</label>
        <input type="number" id='price' className='input' placeholder='$1999,99' />
      </div>

      <div className="button-option">
        {
          option ?
            <Button /> :
          <div className="buttons-edit">
            <Button value={'Cancel'} color={'gray-color'}/>
            <Button value={'Update'} color={'green-color'}/>
          </div>
        }
      </div>

    </form>
  )
}
