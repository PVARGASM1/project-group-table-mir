import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <section className="title">

        <h1 className='title'>My Table</h1>
      </section>
      <div className="menu">
        <h3>Get started</h3>
        <button>
          <span class="material-symbols-outlined">
            menu
          </span>
        </button>
      </div>
    </header>
  )
}
