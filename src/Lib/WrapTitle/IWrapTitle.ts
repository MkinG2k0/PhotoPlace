import { ReactElement } from 'react'

export interface WrapTitleProps {
	title?: string
	classWrap?: string
	onClickWrap?: () => void
	fontSizeTitle?: Size
	SubTitle?: ReactElement
	validInput?: boolean
}
