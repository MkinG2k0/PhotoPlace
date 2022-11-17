import { IEffectProps } from 'Lib/Effect/IEffect'

export interface SkeletInit {
	border?: 0 | 1 | 2 | 3 | 4
	width?: number | string
	height?: number | string
	duration?: AnimDuration
	classSkelet?: string
}

export interface SkeletProps extends SkeletInit {
	status?: boolean | string
}

export interface SkeletTextProps extends SkeletProps, IEffectProps {
	sizeFont?: Size | null
	classText?: string
	text?: string | number | null
}

export interface SkeletTextArrProps extends SkeletTextProps {
	row: number
}

export interface SkeletImgProps extends SkeletProps, IEffectProps {
	src?: string
	classImg?: string
	classWrap?: string
}
