import { Button, Map } from '@comp'
import { FC } from 'react'

import style from './BreadCrumbs.module.scss'

export interface BreadCrumbs {
	paths: CramArr[]
	size?: Size
	checkedId?: number
	onClick?: (path: string, name: string) => void
}

interface CramArr {
	path?: string
	name: string
}

export const BreadCrams: FC<BreadCrumbs> = ({
	onClick,
	paths,
	size,
	checkedId
}) => {
	return (
		<ul className={style.wrap}>
			<Map
				Comp={Cram}
				data={paths}
				props={{ len: paths.length, size, checkedId: checkedId }}
				// onClick={onClick}
			/>
		</ul>
	)
}

interface CramProps {
	onClick?: (path: string, name: string) => void
	name: string
	path: string
	index: number
	len: number
	size: Size
	checkedId: number
}

const Cram: FC<CramProps> = ({
	onClick,
	name,
	path,
	index,
	size,
	checkedId
}) => {
	const onChoose = () => onClick?.(path, name)

	const isChoose = index === checkedId ? 'hover' : 'primary'

	return (
		<Button
			onClick={onChoose}
			fontSize={size}
			text={name}
			type={'circle'}
			status={isChoose}
		/>
	)
}

BreadCrams.defaultProps = {
	size: 4,
	checkedId: 1,
	onClick: () => {}
}
