import classNames from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { toast } from 'react-toastify'

export const getNotify = (
	text: string,
	type: 'error' | 'success' | 'warning'
) => {
	toast[type](text, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined
	})
}

export const getArr = (length: number): undefined[] => Array.from({ length })

export const getRand = (min = 30, max = 100) =>
	Math.floor(Math.random() * (max - min) + min)

export const mergeRefs = (...refs) => {
	const filteredRefs = refs.filter(Boolean)
	if (!filteredRefs.length) return null
	if (filteredRefs.length === 1) return filteredRefs[0]

	return (inst) => {
		for (const ref of filteredRefs) {
			if (typeof ref === 'function') {
				ref(inst)
			} else if (ref) {
				ref.current = inst
			}
		}
	}
}

export const replaceAllEmpty = (str, ...replace) => {
	let res = ''

	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		if (!replace.includes(char)) res += char
	}

	return res
}

export const checkPosition = (call) => {
	const height = document.body.offsetHeight
	const screenHeight = window.innerHeight

	const scrolled = window.scrollY

	const threshold = height - screenHeight / 2

	const position = scrolled + screenHeight

	if (position >= threshold) {
		call()
	}
}

export const replaceAll = (text: string, pattern: string | RegExp) => {
	let res = text
	for (let i = 0; i < text.length; i++) {
		// const char = text[i]
		res = res.replace(pattern, '')
	}

	return res
}

export const formatDateDayAndMonth = (date: string) => {
	if (!date) return ''

	return format(new Date(date), 'd MMMM', {
		locale: ru
	})
}

export const cn = classNames
