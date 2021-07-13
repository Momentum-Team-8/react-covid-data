import React, { useEffect, useState } from 'react'
import { getCountryData } from '../api'

export const CountryData = (props) => {
  const [countryData, setCountryData] = useState({})
  const [loading, setLoading] = useState(true)

  const { selectedCountry } = props

  useEffect(() => {
    getCountryData(selectedCountry).then(data => {
      setCountryData(data)
      setLoading(false)
    })
  }, [selectedCountry])

  return loading
    ? 'Country data is loading'
    : (
      <>
        <div className='section-header'>
          <p className='is-size-4 country has-text-weight-semibold'>{selectedCountry[0].toUpperCase() + selectedCountry.slice(1)}</p>
          {/* notice how I am only using variable name for my handleSort function with no parens */}
          <button
            className='button is-primary'
          >
            Back to Country List
          </button>
        </div>
        {countryData.map((data) => {
          const date = new Date(data.Date)
          const formattedDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
          return (
            <div key={formattedDate} style={{ marginBottom: '10px' }}>
              {data.Date &&
                <p><span className='has-text-weight-bold'>Date:</span> {formattedDate}</p>}
              <p><span className='has-text-weight-bold'>Status:</span> {data.Status}</p>
              <p><span className='has-text-weight-bold'>Cases:</span>{data.Cases}</p>
            </div>
          )
        })}
      </>
      )
}
