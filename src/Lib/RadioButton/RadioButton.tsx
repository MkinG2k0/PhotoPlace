import { Dot, Map, Skelet } from '@comp'
import { cn } from '@helper'
import { FC, useState } from 'react'

import style from './RadioButton.module.scss'

type onClick = (id: number, name: string) => void

interface CheckBoxProps {
	data?: Item[]
	onCheck?: onClick
	initId?: number
}

export const RadioButton: FC<CheckBoxProps> = ({
	data,
	onCheck,
	initId = 0
}) => {
	const [checkedId, setCheckedId] = useState<number>(initId)

	const onCheckItem: onClick = (id, name) => {
		onCheck?.(id, name)
		setCheckedId(id)
	}

	if (!data || data.length === 0) return <Skelet />

	return (
		<ul className={style.wrap}>
			<Map
				Comp={CheckBoxItem}
				data={data}
				onClick={onCheckItem}
				props={{ checkedId }}
			/>
		</ul>
	)
}

interface CheckBoxItemProps extends Item {
	onClick: onClick
	checkedId: number
}

const CheckBoxItem: FC<CheckBoxItemProps> = ({
	name,
	id,
	onClick,
	checkedId
}) => {
	const classDot = cn({ [style.checked]: checkedId === id }, style.classD)

	const onClickItem = () => onClick(id, name)

	return (
		<li className={style.item} onClick={onClickItem}>
			<Dot classD={classDot} />
			<span>{name}</span>
		</li>
	)
}

RadioButton.defaultProps = {
	onCheck: () => {},
	data: [],
	initId: 0
}
