import React from 'react'
import './Author.css'

export const Author = ({ photo, name, description, addres, github, link, value }) => {
  return (
    <div className='author-card'>
      <div className="profile-photo">
        <img src={photo} alt="Profile" />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>
          GitHub: {' '}
          <a href={addres} target='_blank'>{github}</a>
        </p>
        <p>Portfolio: {' '}
          <a href={link}  target='_blank'>{value}</a>
        </p>
      </div>
    </div>
  )
}
