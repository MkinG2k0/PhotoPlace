import { NavLink } from 'react-router-dom'
import { NAV } from 'Routes/NAV'

function AnyPage() {
	return (
		<div>
			AnyPage <NavLink to={NAV.MAIN}>Main</NavLink>
		</div>
	)
}

export default AnyPage
