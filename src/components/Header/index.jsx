import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <section className="title">
        <img src="'../../public/Logo-my-site.png" alt="Logo project" />
        <h1 className='title'>My Table</h1>
      </section>
      <div className="menu">
        <h3>Get started</h3>
        <span className="material-symbols-outlined">
          menu
        </span>
      </div>
    </header>
  )
}
