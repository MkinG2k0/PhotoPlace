import { Size } from 'Interface/Comp'
import { WrapTitleProps } from 'Lib/WrapTitle/IWrapTitle'

export interface IInputProps extends WrapTitleProps {
	fontSize?: Size
	currentRef?: React.RefObject<any>
	onChange?: onChange
	spread?: any
	value?: string
	inputType?: inputType
	name?: string
	placeholder?: string
	speedUpdate?: number
	required?: boolean
	disabled?: boolean
	classInput?: string
	minValue?: number
	maxValue?: number
	textOnly?: boolean
	initValid?: boolean
}

type onChange = (
	value: string,
	name: string,
	valid: boolean,
	title: string,
	ref: React.RefObject<HTMLBaseElement>
) => void

type inputType = 'text' | 'date' | 'range' | 'number' | 'color'
