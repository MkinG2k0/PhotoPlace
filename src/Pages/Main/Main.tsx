import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAV } from 'Routes/NAV'
import {AllPlace} from "../../Components/AllPlace/AllPlace";
import {Draggable} from "../../Components/Draggable/Draggable";

function Main() {
	const navigate = useNavigate()

	useEffect(() => {
		navigate(NAV.AUTH)
	}, [])

	return (
		<div>

		</div>
	)
}

export default Main
