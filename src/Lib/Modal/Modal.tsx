import { Effect } from '@comp'
import { cn } from '@helper'
import { useToggleTime } from 'Hook/Helper.hook'
import { FC } from 'react'

import { CenterProps, CloseProps, ModalProps } from './IModal'
import style from './Modal.module.scss'

export const Modal: FC<ModalProps> = ({
	children,
	open,
	onClose,
	XCenter,
	YCenter,
	duration
}) => {
	const toggle = useToggleTime(open, duration)

	if (toggle && !open) return null

	return (
		<div className={style.wrap + ' stopScroll'}>
			<Close onClose={onClose}>
				<Effect type={'fade'} open={open} duration={duration} wh={true}>
					<Effect type={'zoom'} open={open} duration={duration} wh={true}>
						<Center XCenter={XCenter} YCenter={YCenter}>
							{children}
						</Center>
					</Effect>
				</Effect>
			</Close>
		</div>
	)
}

Modal.defaultProps = {
	duration: 400
}

export const Close: FC<CloseProps> = ({ children, onClose }) => (
	<div className={style.close} onClick={onClose}>
		{children}
	</div>
)

const Center: FC<CenterProps> = ({ children, XCenter, YCenter }) => {
	const styleCenter = cn({
		[style.center]: XCenter && YCenter,
		[style['center-x']]: XCenter && !YCenter,
		[style['center-y']]: YCenter && !XCenter
	})

	return (
		<div className={styleCenter} onClick={(e) => e.stopPropagation()}>
			{children}
		</div>
	)
}

Center.defaultProps = {
	XCenter: true,
	YCenter: true
}
