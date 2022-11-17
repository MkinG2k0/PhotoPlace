import { cn } from '@helper'
import { Button, Input } from '@lib'
import { NavButton } from 'Components/NavButton/NavButton'
import { WrapPage } from 'Components/WrapPage/WrapPage'
import { useToggle } from 'Hook/Other.hook'
import { Arrow } from 'Icons/Arrow'
import { Brand } from 'Icons/Brand'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NAV } from 'Routes/NAV'

import style from './Login.module.scss'

const Login: FC = () => {
	const navigate = useNavigate()
	const [toggle, setToggle] = useToggle(false)

	const clWrap = cn(
		{ [style.outAnim]: toggle, [style.startAnim]: !toggle },
		style.abs
	)

	useEffect(() => {
		let timeOut
		if (toggle) {
			timeOut = setTimeout(() => {
				navigate(NAV.AUTH)
			}, 1e3)
		}

		return () => {
			clearTimeout(timeOut)
		}
	}, [toggle])

	const logIn = () => {
		navigate(NAV.MAIN)
	}

	const onClose = () => {
		setToggle()
	}

	return (
		<WrapPage classWrap={clWrap}>
			<div className={style.close}>
				<Button type={'square'} classButton={style.btn} onClick={onClose}>
					<Arrow.Left />
				</Button>
			</div>
			<Input placeholder={'Введите ваш email'} />
			<Input placeholder={'Введите ваш пароль'} />
			<Button text={'Войти'} onClick={logIn} />
			<div className={style.lines}>
				<div className={style.line}></div>
				<div className={style.textLine}>Или войдите через</div>
				<div className={style.line}></div>
			</div>
			<div className={style.brands}>
				<NavButton classButton={style.brandBtn} type={'link'} to={NAV.GOOGLE}>
					<Brand.Google />
				</NavButton>{' '}
				<NavButton classButton={style.brandBtn} type={'link'} to={NAV.GOOGLE}>
					<Brand.Google />
				</NavButton>
				<NavButton classButton={style.brandBtn} type={'link'} to={NAV.GOOGLE}>
					<Brand.Google />
				</NavButton>
			</div>
		</WrapPage>
	)
}

export default Login
