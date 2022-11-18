import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAV } from 'Routes/NAV'

function Main() {
	const navigate = useNavigate()

	useEffect(() => {
		navigate(NAV.AUTH)
	}, [])

	return <div>{/*<PlaceInfo/>*/}</div>
}

export default Main
