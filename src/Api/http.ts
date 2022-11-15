import axios from 'axios'

export const http = axios.create({
	baseURL: import.meta.env.API_URL_ENDPOINT,
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})
