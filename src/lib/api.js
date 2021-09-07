import axios from 'axios'

const baseUrl = '/api/shoes'

export function getAllShoes() {
  return axios.get(`${baseUrl}`)
}

export function getSingleShoe(shoeId) {
  return axios.get(`${baseUrl}/${shoeId}`)
}