import React from 'react'
import 'bulma/css/bulma.min.css'

export const CountryList = (props) => {
  const { countries, setSelectedCountry, handleSort, sortOrder } = props
  return (
    <>
      <div className='section-header'>
        <p className='is-size-4 country has-text-weight-semibold'>Countries</p>
        {/* notice how I am only using variable name for my handleSort function with no parens */}
        <button
          className='button is-primary'
          onClick={handleSort}
        >
          {sortOrder === 'asc' ? 'Sort by Ascending' : 'Sort by Descending'}
        </button>
      </div>
      <div>
        {countries.map(country => {
          return (
            <div key={country.slug} className='country-button'>
              <p>{country.Country}</p>
              <button className='button' onClick={() => setSelectedCountry(country.Slug)}>Select country</button>
            </div>
          )
        })}
      </div>
    </>
  )
}
