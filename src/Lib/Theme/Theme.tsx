import '../../Style/mix.scss'

import { FC } from 'react'

import style from './Theme.module.scss'

// import 'Style/font.scss'

export interface ThemeProps {
	palette: IPalette
}

export interface IPalette {
	base?: string
	second?: string
	triple?: string
	bg?: string
}

export const Theme: FC<ThemeProps> = ({ children, palette }) => {
	const colors = {
		'--color-base': palette.base,
		'--color-second': palette.second,
		'--color-triple': palette.triple,
		'--color-bg': palette.bg
	} as React.CSSProperties

	return (
		<div className={style.wrap} style={colors}>
			{children}
		</div>
	)
}

Theme.defaultProps = {
	palette: {
		base: '#475284',
		second: '#2d3251',
		triple: '#161625',
		bg: '#232228'
	}
}
