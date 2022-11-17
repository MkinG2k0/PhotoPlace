import { Button } from '@comp'
import { useIsMount } from 'Hook/Other.hook'
import { typeB } from 'Lib/Input/Button/IButton'
import { FC, useEffect, useState } from 'react'

import style from './Pagination.module.scss'

interface PaginationProps {
	current?: number
	all?: number
	type?: typeB
	name?: string
	preview?: number
	onClick?: (choose, name) => void
	size?: Size
}

export const Pagination: FC<PaginationProps> = ({
	preview = 3,
	current = 1,
	all = 3,
	type,
	name,
	onClick,
	size
}) => {
	const [currentNumber, setNumber] = useState(current)
	const Buttons = new Array(all).fill('').map((_, i) => i + 1)

	const isMount = useIsMount()

	useEffect(() => {
		if (isMount) onClick?.(currentNumber, name)
	}, [currentNumber])

	const pickBtn = (number) => setNumber(number)

	const incrementNumber = () => {
		if (currentNumber < all) setNumber((prevState) => prevState + 1)
	}

	const decrementNumber = () => {
		if (currentNumber > 1) setNumber((prevState) => prevState - 1)
	}

	const startCut = (() => {
		let cut = currentNumber - preview - 1
		if (cut < 1) cut = 0

		return cut
	})()

	const endCut = (() => {
		const cut = currentNumber + preview
		if (cut > all) return all

		return cut
	})()

	return (
		<div className={style.wrap}>
			<Button
				onClick={decrementNumber}
				classButton={style.pag}
				text={'<'}
				type={type}
			/>
			{Buttons.slice(startCut, endCut).map((number) => (
				<Button
					status={currentNumber === number ? 'hover' : 'primary'}
					onClick={() => pickBtn(number)}
					text={String(number)}
					key={number}
					type={type}
					fontSize={size}
					classButton={style.pag}
				/>
			))}
			<Button
				onClick={incrementNumber}
				classButton={style.pag}
				text={'>'}
				type={type}
			/>
		</div>
	)
}

Pagination.defaultProps = {
	name: 'name',
	type: 'circle',
	current: 1,
	preview: 1,
	all: 3,
	onClick: () => {}
}
