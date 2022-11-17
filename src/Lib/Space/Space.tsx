import { FC } from 'react'

import { SpaceProps } from './ISpace'

export const Space: FC<SpaceProps> = ({ x = 0, y = 0, children }) => {
	return (
		<div style={{ margin: `${y / 3}em ${x / 3}em`, width: '100%' }}>
			{children}
		</div>
	)
}

Space.defaultProps = {
	x: 0,
	y: 0
}
