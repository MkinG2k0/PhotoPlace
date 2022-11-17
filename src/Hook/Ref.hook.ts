import { replaceAll } from '@helper'
import React, { RefObject, useEffect, useRef, useState } from 'react'

import { useIsMount } from './Other.hook'

export const useFocus = (
	initialRef: HTMLBaseElement | null = null,
	onFocus?: (focus: boolean, ref: RefObject<HTMLBaseElement>) => void
) => {
	const ref = useRef<HTMLBaseElement>(initialRef)
	const [isFocus, setFocus] = useState(false)

	useEffect(() => {
		const current = ref.current

		if (current) {
			current.addEventListener('blur', () => changeFocus(false))
			current.addEventListener('focus', () => changeFocus(true))
		}

		return () => {
			if (current) {
				current.removeEventListener('blur', () => {})
				current.removeEventListener('focus', () => {})
			}
		}
	}, [])

	const changeFocus = (focus: boolean) => {
		setFocus(focus)
		onFocus?.(focus, ref)
	}

	const actionSetFocus = (type?: boolean) => {
		if (!ref.current) return

		if (type) ref.current.focus()
		else ref.current.blur()
	}

	return { ref, actionSetFocus, isFocus }
}

export interface useInputProps {
	(
		initialRef,
		eventChange: (value: string, name: string, ref: any) => void,
		conf: {
			value: string
			name: string
			speedUpdate?: number
			textOnly?: boolean
		}
	): { ref: React.Ref<InputEvent>; spread: { onChange: any; value: any } }
}

export const useInput: useInputProps = (initialRef, eventChange, conf) => {
	const { name, speedUpdate, textOnly, value } = conf
	const ref = useRef(initialRef)
	const [valueInput, setValueInput] = useState<string>(value)
	const isMount = useIsMount()

	useEffect(() => {
		if (isMount) {
			const timeOut = setTimeout(
				eventChange,
				speedUpdate,
				valueInput,
				name,
				ref.current
			)

			return () => clearTimeout(timeOut)
		}
	}, [valueInput])

	useEffect(() => {
		setValueInput(valueInput)
	}, [valueInput])

	function onChange(e) {
		const value = e.target.value
		// const validValue = textOnly ? value.replaceAll(/[0-9]/g, '') : value
		const validValue = textOnly ? replaceAll(value, /[0-9]/g) : value

		setValueInput(validValue)
	}

	return {
		ref,
		spread: {
			onChange,
			value: valueInput
		}
	}
}

export const useHover = (refInit = null) => {
	const ref = useRef<HTMLBaseElement>(refInit)
	const [isHovering, setHovering] = useState(false)

	const on = () => setHovering(true)
	const off = () => setHovering(false)

	useEffect(() => {
		const current = ref.current

		if (!current) return undefined

		current.addEventListener('mouseenter', on)
		current.addEventListener('mouseleave', off)

		return () => {
			current.removeEventListener('mouseenter', on)
			current.removeEventListener('mouseleave', off)
		}
	}, [])

	return { isHovering, ref }
}
