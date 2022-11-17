import { ReactElement } from 'react'

export interface IButton {
	text?: string
	onClick?: (
		name: string,
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void
	classButton?: string
	classText?: string
	fontSize?: Size
	type?: typeB
	status?: statusB
	Before?: ReactElement
	After?: ReactElement
	liquid?: boolean
	isDisable?: boolean
	typeBtn?: 'submit' | 'reset' | 'button'
	name?: string
}

export type typeB = 'link' | 'square' | 'circle' | 'smooth' | 'none'
export type statusB = 'primary' | 'danger' | 'success' | 'warning' | 'hover'
