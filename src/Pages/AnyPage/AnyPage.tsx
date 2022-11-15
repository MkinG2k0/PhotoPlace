import { NavLink } from 'react-router-dom'
import { ROUTES } from 'Routes/Routes'

function AnyPage() {
	return (
		<div>
			AnyPage <NavLink to={ROUTES.MAIN}>Main</NavLink>
		</div>
	)
}

export default AnyPage
