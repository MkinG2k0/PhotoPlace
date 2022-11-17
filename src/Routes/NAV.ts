import { lazy } from 'react'

export const NAV = {
	MAIN: '/',
	ANY: '/any',
	AUTH: '/auth',
	LOGIN: '/login',
	REGISTER: '/register',
	GOOGLE: '/'
}

export const components = [
	{
		path: NAV.MAIN,
		Component: lazy(() => import('Pages/Main/Main'))
	},
	{
		path: NAV.ANY,
		Component: lazy(() => import('Pages/AnyPage/AnyPage'))
	},
	{
		path: NAV.AUTH,
		Component: lazy(() => import('Pages/Auth/Auth'))
	},
	{
		path: NAV.REGISTER,
		Component: lazy(() => import('Pages/Register/Register'))
	},
	{
		path: NAV.LOGIN,
		Component: lazy(() => import('Pages/Login/Login'))
	}
]
