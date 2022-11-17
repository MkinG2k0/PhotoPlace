import { cn } from '@helper'
import { Button } from '@lib'
import { useToggle } from 'Hook/Other.hook'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAV } from 'Routes/NAV'

import style from './Auth.module.scss'

const Auth: FC = () => {
	const [toggle, setToggle] = useToggle(false)
	const [nav, setNav] = useState(NAV.MAIN)
	const navigate = useNavigate()

	useEffect(() => {
		let timeOut
		if (toggle) {
			timeOut = setTimeout(() => {
				navigate(nav)
			}, 1e3)
		}

		return () => {
			clearTimeout(timeOut)
		}
	}, [toggle])

	const clBottomBorder = cn(
		{ [style.outAnim]: toggle, [style.startAnim]: !toggle },
		style.bottomBorder
	)

	const Login = () => {
		setToggle()
		setNav(NAV.LOGIN)
	}

	const Register = () => {
		setToggle()
		setNav(NAV.REGISTER)
	}

	return (
		<div className={style.wrap}>
			<div className={style.video}></div>

			<div className={clBottomBorder}>
				<div className={style.bottom}>
					<Button
						text={'Войти'}
						classButton={style.login}
						type={'square'}
						onClick={Login}
					/>
					<Button
						text={'Зарегистрироваться'}
						status={'hover'}
						type={'square'}
						classButton={style.regBtn}
						onClick={Register}
					/>
				</div>
			</div>
		</div>
	)
}

export default Auth
