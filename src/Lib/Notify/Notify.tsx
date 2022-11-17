import { cn } from '@helper'
import { FC } from 'react'

import style from './Notify.module.scss'

interface NotifyProps {
	open?: boolean
	left?: boolean
	right?: boolean
	top?: boolean
	bottom?: boolean
	title?: string
	text?: string
	notify?: any
}

export const useNotify = () => {
	const notify = () => {}

	return [notify]
}

export const Notify: FC<NotifyProps> = ({
	left,
	top,
	bottom,
	right,
	open,
	title,
	text
}) => {
	const classWrap = cn(
		{
			[style.left]: left,
			[style.right]: right,
			[style.top]: top,
			[style.bottom]: bottom,
			[style.rightMove]: open && right
		},
		style.wrap
	)

	return (
		<div className={classWrap}>
			<div className={style.notify}>
				<div>
					<span>{title} </span>
				</div>
				<div>
					<span>{text} </span>
				</div>
			</div>
		</div>
	)
}

Notify.defaultProps = {
	right: true,
	top: true,
	text: 'text',
	title: 'Title'
}
