import axios from 'axios'

/** API Options with axios Here */

export const cnx = axios.create({
  baseURL: `http://0.0.0.0:5000/api`
})

