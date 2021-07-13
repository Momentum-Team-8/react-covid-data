import React from 'react'
import 'bulma/css/bulma.min.css'

export const NavBar = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <img src='https://www.fairfaxcounty.gov/health/sites/health/files/Assets/images/Coronavirus/COVID-19-icon.png' alt='covid-icon' />
        <h1 className='title'>React Covid Data</h1>

        <a
          role='button'
          class='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>

      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            <a className='button is-primary'>
              <strong>Sign up</strong>
            </a>
            <a className='button is-outlined'>
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
