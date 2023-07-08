import React from 'react'
import './Header.css'

export const Header = ({
  onClick
}) => {

  

  return (
    <header className='header'>
      <section className="title">
        <img src="'../../public/Logo-my-site.png" alt="Logo project" />
        <h1 className='title'>My Table</h1>
      </section>
      <div className="menu">
        <div className="burger-menu">
          <input id="toggle" type="checkbox"></input>

          <label htmlFor="toggle" className="hamburger">
            <div className="top-bun"></div>
            <div className="meat"></div>
            <div className="bottom-bun"></div>
          </label>

          <div className="nav">
            <div className="nav-wrapper">
              <nav>
                <button onClick={onClick} className='button-1'>HOME</button>
                <br />
                <button onClick={onClick} className='button-2'>ABOUT</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
