import { useEffect } from 'react'

import { useToggle } from './Other.hook'

export const useLogger = (value, textLog = 'logger : '): void => {
	useEffect(() => {
		console.log(textLog, value)
	}, [value])
}

export const useTimeOut = (value, event: () => void, duration = 1) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			event()
		}, duration)

		return () => clearTimeout(timer)
	}, [value])
}

export const useToggleTime = (initValue?: boolean, duration?: number) => {
	const [toggle, setToggle] = useToggle(initValue)

	// @ts-ignore
	useTimeOut(initValue, () => setToggle(), duration)

	return toggle
}
