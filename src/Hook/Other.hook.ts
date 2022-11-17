import { Dispatch } from 'Interface/Comp'
import { SetStateAction, useEffect, useRef, useState } from 'react'

type returnToggle = [boolean, Dispatch<SetStateAction<boolean | undefined>>]

export const useToggle = (initState = false): returnToggle => {
	const [toggle, setState] = useState<boolean>(initState)

	const setToggle = (state?: SetStateAction<boolean | undefined>): void => {
		if (typeof state === 'boolean') setState(state)
		else if (typeof state === 'function') setState(Boolean(state?.(toggle)))
		else setState((prevState) => !prevState)
	}

	return [toggle, setToggle]
}

type useEffectSkipMountProps = (cd: () => void, deps: any[]) => void

export const useEffectSkipMount: useEffectSkipMountProps = (func, deps) => {
	const mounted = useRef(false)
	useEffect(() => {
		if (mounted.current) func()
		mounted.current = true
	}, deps)
}

export const useIsMount = () => {
	const isMountRef = useRef(false)
	useEffect(() => {
		isMountRef.current = true
	}, [])

	return isMountRef.current
}

type useArrowProps = (
	end: number,
	start?: number,
	initValue?: number
) => [value: number, onLeft: () => void, onRight: () => void]

export const useArrow: useArrowProps = (end, start = 0, initValue = 0) => {
	const [value, setValue] = useState(initValue)

	const onLeft = () => {
		if (value !== start) setValue((prevState) => prevState - 1)
	}

	const onRight = () => {
		if (value + 1 < end) setValue((prevState) => prevState + 1)
	}

	return [value, onLeft, onRight]
}
