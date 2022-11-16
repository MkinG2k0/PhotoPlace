import { useMedia } from 'Hook/Media.hook'
import { FC } from 'react'

import style from './Layout.module.scss'

export const Layout: FC = ({ children }) => {
	const isMobile = useMedia(700, 'max')

	return (
		<div className={style.wrap}>
			<div className={style.content}>{children}</div>
		</div>
	)
}
