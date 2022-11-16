import { FC } from 'react'

import style from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return <div className={style.wrap}>Header</div>
}
