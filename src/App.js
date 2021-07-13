/* standard-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css'

import { NavBar } from './components/NavBar'
import { CountryList } from './components/CountryList'
import { CountryData } from './components/CountryData'

import { getCountryList } from './api'
import _ from 'lodash'

function App () {
  const [countries, setCountries] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedCountry, setSelectedCountry] = useState(null)
  console.log(selectedCountry)
  useEffect(() => {
    // axios.get('https://api.covid19api.com/countries')
    // .then(res => setCountries(res.data))
    getCountryList().then((countries) => setCountries(countries))

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
      <NavBar />
      <section>
        {selectedCountry
          ? <CountryData selectedCountry={selectedCountry} />
          : (
            <CountryList
              countries={countries}
              setSelectedCountry={setSelectedCountry}
              handleSort={handleSort}
              sortOrder={sortOrder}
            />
            )}
      </section>
    </div>
  )
}

export default App
