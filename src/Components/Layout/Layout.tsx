import { Footer } from 'Components/Layout/Footer/Footer'
import { Header } from 'Components/Layout/Header/Header'
import { FC } from 'react'

import style from './Layout.module.scss'

export const Layout: FC = ({ children }) => {
	return (
		<div className={style.wrap}>
			<Header />
			<div className={style.content}>{children}</div>
			<Footer />
		</div>
	)
}
