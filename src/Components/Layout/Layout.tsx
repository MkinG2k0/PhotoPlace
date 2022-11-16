import { FC } from 'react'
import {InfoAbPoint} from '../InfoAbPoint/infoAbPoint'

import style from './Layout.module.scss'

export const Layout: FC = ({ children }) => {
	return (
		<div className={style.wrap}>
			<div className={style.content}>
				<InfoAbPoint />
			</div>
		</div>
	)
}
