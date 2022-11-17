import { cn } from '@helper'
import { FC } from 'react'

import styles from './Grid.module.scss'
import { GridProps } from './IGrid'

export const Grid: FC<GridProps> = ({
	children,
	container,
	xs,
	sm,
	md,
	lg,
	spacing,
	justifyContent,
	alignItems,
	...props
}) => {
	const classNames = cn({
		[styles.Grid_container]: container,
		[styles.Grid_item]: !container,
		[styles[`Grid_xs_${xs}`]]: xs,
		[styles[`Grid_sm_${sm}`]]: sm,
		[styles[`Grid_md_${md}`]]: md,
		[styles[`Grid_lg_${lg}`]]: lg,
		[styles[`Grid_spacing_${spacing}`]]: spacing,
		[styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
		[styles[`Grid_alignItems_${alignItems}`]]: alignItems
	})

	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	)
}

Grid.defaultProps = {
	xs: 12,
	alignItems: 'center'
}
