import { cn } from '@helper'
import { FC } from 'react'

import style from './Full.module.scss'
import { IFullProps } from './IFull'

export const Full: FC<IFullProps> = ({ children, open, onClose }) => {
	const ClassFull = cn({
		[style.open]: open
	})

	return (
		<div className={ClassFull} onClick={onClose}>
			<div onClick={(e) => e.stopPropagation()}>{children}</div>
		</div>
	)
}
