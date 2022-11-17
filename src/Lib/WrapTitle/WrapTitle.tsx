import { Dot } from '@comp'
import { cn } from 'Helper/helper'
import { FC } from 'react'

import { WrapTitleProps } from './IWrapTitle'
import style from './WrapTitle.module.scss'

export const WrapTitle: FC<WrapTitleProps> = ({
	classWrap = '',
	children,
	title,
	onClickWrap,
	fontSizeTitle,
	SubTitle,
	validInput
}) => {
	const styleWrapS = cn({ [classWrap]: classWrap }, style.wrap)
	const styleTitle = cn({}, 'f-' + fontSizeTitle, style.title)

	return (
		<div className={styleWrapS} onClick={onClickWrap}>
			{title && (
				<div className={style.header}>
					<div className={style.row}>
						<label className={styleTitle}>{title}</label>
						{SubTitle && SubTitle}
					</div>
					{!validInput && <Dot color={'#d72121'} />}
				</div>
			)}
			{children}
		</div>
	)
}

WrapTitle.defaultProps = { fontSizeTitle: 7, validInput: true }
