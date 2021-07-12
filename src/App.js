/* standard-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css'
import axios from 'axios'
import _ from 'lodash'

function App () {
  const [countries, setCountries] = useState([])
  // I am setting up sortOrder so I can compare
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    axios.get('https://api.covid19api.com/countries')
      .then(res => setCountries(res.data))
      // here my dependancy array is empty because I am
      // setting a new state value for countries in my
      // handleSort function below
      // we would put a variable in the dependancy array if we were
      // making a new request to the api that sets new state for our app
  }, [])

  const handleSort = () => {
    // The below code will never update countries because
    // the value newCountries initialized but never changes
    // the next line runs, but there is no actual output for it...
    // const newCountries = countries
    // _.orderBy(countries, (country) => country.Country, sortOrder)

    // Here I am creating a new, sorted array from the
    // countries array in state. I need to create a new array, so that the state
    // data does not change until the 'sort by' button below is clicked.
    const newCountries = _.orderBy(countries, (country) => country.Country, sortOrder)

    // I need to set state to my newly sorted
    // array of countries
    setCountries(newCountries)

    // I need to set the sort order so I can toggle
    // these strings are specifically for the lodash _.orderBy function
    // https://lodash.com/docs/4.17.15#orderBy
    setSortOrder(sortOrder !== 'asc' ? 'asc' : 'desc')
  }

  return (
    <div className='container'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <img src='https://www.fairfaxcounty.gov/health/sites/health/files/Assets/images/Coronavirus/COVID-19-icon.png' alt='covid-icon' />
          <h1 className='title'>React Covid Data</h1>
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
      <section>
        <div className='section-header'>
          <p className='is-size-4 country has-text-weight-semibold'>Countries</p>
          {/* notice how I am only using variable name for my handleSort function with no parens */}
          <button className='button is-primary' onClick={handleSort}>
            {sortOrder === 'asc' ? 'Sort by Ascending' : 'Sort by Descending'}
          </button>
        </div>
        {countries.map(country => {
          return (
            <div key={country.slug}>
              <p>{country.Country}</p>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default App
