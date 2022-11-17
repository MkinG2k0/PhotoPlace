import { Effect } from '@comp'
import { cn } from '@helper'
import { useRandArr } from 'Hook/Rand.hook'
import { FC } from 'react'

import {
	SkeletImgProps,
	SkeletProps,
	SkeletTextArrProps,
	SkeletTextProps
} from './ISkelet'
import style from './Skelet.module.scss'

export const Skelet: FC<SkeletProps> = ({
	classSkelet = '',
	children,
	width,
	height,
	status,
	border,
	duration
}) => {
	const skeletClass = cn(
		{
			[classSkelet]: classSkelet,
			[style['border-' + border]]: border
		},
		style.skelet
	)

	if (status) return <>{children}</>

	return (
		<Effect
			type={'fade'}
			open={true}
			width={width}
			height={height}
			duration={duration}
		>
			{!status && <div className={skeletClass} style={{ width, height }} />}
		</Effect>
	)
}

Skelet.defaultProps = {
	status: false,
	border: 1,
	width: '100%',
	duration: 100
}

// @SkeletText

export const SkeletText: FC<SkeletTextProps> = ({
	classSkelet = '',
	classText = '',
	children,
	width,
	status,
	sizeFont,
	border,
	duration,
	text
}) => {
	const validText = text?.toString()
	const skeletClass = cn(
		{
			[style['border-' + border]]: border,
			[classSkelet]: classSkelet
		},
		style.skelet
	)

	const spanClass = cn(
		{
			['f-' + sizeFont]: sizeFont
		},
		classText
	)

	if (status !== undefined && status)
		return (
			<>
				{validText && <span className={spanClass}>{text}</span>}
				{children}
			</>
		)
	if (status === undefined && text)
		return (
			<>
				{validText && <span className={spanClass}>{text}</span>}
				{children}
			</>
		)

	return (
		<Effect
			type={'fade'}
			open={!Boolean(status)}
			width={width}
			height={'auto'}
			duration={duration}
		>
			<div className={skeletClass}>
				<span className={spanClass}>{'⁣'}</span>
			</div>
		</Effect>
	)
}

SkeletText.defaultProps = {
	border: 3,
	duration: 100,
	sizeFont: 4
}

// @SkeletText Arr

export const SkeletTextArr: FC<SkeletTextArrProps> = ({
	children,
	status,
	row,
	classText,
	text,
	...props
}) => {
	const rand = useRandArr(60, 100, row)

	if (status)
		return (
			<>
				{text && <span className={classText}>{text}</span>}
				{children}
			</>
		)

	return (
		<ul className={style.skeletTextArr}>
			{rand.map((item, index) => (
				<li key={index}>
					<SkeletText
						{...props}
						width={item + '%'}
						status={status}
						key={index}
					/>
				</li>
			))}
		</ul>
	)
}

SkeletTextArr.defaultProps = {
	status: false,
	row: 1
}

export const SkeletImg: FC<SkeletImgProps> = ({
	classImg = '',
	classWrap = '',
	src,
	status,
	duration,
	border,
	width,
	height,
	...props
}) => {
	// const [image, setState] = useState(new Image())

	// useEffect(() => {
	// image.src = src || ''
	// image.onload = function () {
	//   console.log('load')
	// }
	// image.onerror = function () {
	//   console.log('err')
	// }
	// }, [])

	const imgClass = cn(
		{
			[style['border-' + border]]: border,
			[classImg]: classImg
		},
		style.img
	)

	const classesWrap = cn({}, style.imgWrap, classWrap)

	return (
		<Skelet
			status={src && status}
			border={border}
			height={height}
			width={width}
			classSkelet={classesWrap}
			{...props}
		>
			<div className={classesWrap} style={{ width, height }}>
				<img
					src={src}
					alt={''}
					className={imgClass}
					style={{ width, height }}
				/>
			</div>
		</Skelet>
	)
}

SkeletImg.defaultProps = {
	width: '100%',
	border: 1,
	status: true
}
