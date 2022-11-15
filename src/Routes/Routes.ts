import { lazy } from 'react'

export const ROUTES = {
	MAIN: '/',
	ANY: '/any'
}

export const components = [
	{
		path: ROUTES.MAIN,
		Component: lazy(() => import('Pages/Main/Main'))
	},
	{
		path: ROUTES.ANY,
		Component: lazy(() => import('Pages/AnyPage/AnyPage'))
	}
]
