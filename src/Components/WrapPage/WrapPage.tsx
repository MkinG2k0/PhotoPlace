import { cn } from '@helper'
import { FC } from 'react'

import style from './WrapPage.module.scss'

interface WrapPageProps {
	classWrap?: string
	gap?: number
}

export const WrapPage: FC<WrapPageProps> = ({
	classWrap = '',
	gap,
	children
}) => {
	const cnWrap = cn({ [classWrap]: classWrap }, style.wrap)

	return (
		<div className={cnWrap} style={{ gap: `${gap}rem` }}>
			{children}
		</div>
	)
}

WrapPage.defaultProps = {
	gap: 1
}
