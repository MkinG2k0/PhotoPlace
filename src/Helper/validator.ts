import { replaceAllEmpty } from '@helper'
import { format } from 'date-fns'

export const validPhoneLength = (value) => validatePhone(value).length === 11

export const formatDate = (date: Date) => format(date, 'u-MM-dd')

export const validatePhone = (number: string) =>
	replaceAllEmpty(number, '-', '(', ')', '_', '+', ' ')

export const validatePhoneLength = (number: string) =>
	replaceAllEmpty(number, '-', '(', ')', '+')

export const toRub = new Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'rub',
	minimumFractionDigits: 0
})

export const validateMinMax = (
	value: string,
	minValue?: number,
	maxValue?: number
) => {
	let validMin = true
	let validMax = true

	if (minValue) {
		validMin = minValue <= value.length
	}
	if (maxValue) {
		validMax = maxValue >= value.length
	}

	return validMin && validMax
}
