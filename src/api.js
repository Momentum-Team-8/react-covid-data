import axios from 'axios'

export function getCountryList () {
  return axios.get('https://api.covid19api.com/countries')
    .then(res => res.data)
}

export function getCountryData (country) {
  return axios.get(`https://api.covid19api.com/country/${country}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
    .then(res => res.data)
}
