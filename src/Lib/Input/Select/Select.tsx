import { Button, Map } from '@comp'
import { cn, mergeRefs } from 'Helper/helper'
import { useToggle } from 'Hook/Other.hook'
import { useFocus } from 'Hook/Ref.hook'
import { Arrow } from 'Icons/Arrow'
import { WrapTitle } from 'Lib/WrapTitle/WrapTitle'
import { FC, useEffect, useState } from 'react'

import { SelectProps } from './ISelect'
import style from './Select.module.scss'

export const Select: FC<SelectProps> = ({
	name = '',
	data = [],
	nameKey = '',
	title,
	onChange,
	onOpen,
	chooseValue,
	size,
	fontSizeTitle,
	onClear,
	required,
	onChooseClear
}) => {
	const [value, setItem] = useState(chooseValue)
	const [toggle, setToggle] = useToggle()
	const { ref, actionSetFocus, isFocus } = useFocus()
	const refs = mergeRefs(ref)

	useEffect(() => {
		setItem(chooseValue)
	}, [chooseValue])

	const classChoose = cn({}, 'f-' + size, style.choose)

	function onClick(item: { name: string }, name: string) {
		onChange?.(item, name)
		actionSetFocus(false)
		if (!onChooseClear) setItem(item.name)
	}

	function Item(item: { id: number; name: string }) {
		const cnItem = cn({ [style.manyItem]: data.length > 6 }, style.item)

		return (
			<li className={cnItem} key={item.id} onClick={() => onClick(item, name)}>
				{item[nameKey]}
			</li>
		)
	}

	function List() {
		const classDrop = cn({ [style.open]: isFocus }, style.drop)

		if (!isFocus || toggle) return null

		return (
			<ul className={classDrop}>
				<Map Comp={Item} data={data} />
			</ul>
		)
	}

	const Toggle = () => {
		setToggle((prevState) => !prevState)
	}
	const onBlur = () => setToggle(false)

	const onFocusSelect = () => {
		onOpen?.(name)
		setToggle(true)
	}

	function ClearValue() {
		setItem('')
		onClear?.(name)
	}

	return (
		<WrapTitle title={title} fontSizeTitle={fontSizeTitle}>
			<div
				className={classChoose}
				onFocus={onFocusSelect}
				onClick={Toggle}
				onBlur={onBlur}
				tabIndex={0}
				ref={refs}
			>
				<div className={style.text}>
					<span>{value}</span>
					<input
						type="text"
						value={value}
						required={required}
						readOnly
						className={style.input}
					/>

					<div className={style.leftBar}>
						{value && (
							<Button
								// Before={<Arrow.Close />}
								type={'square'}
								status={'primary'}
								fontSize={2}
								onClick={ClearValue}
								classButton={style.btn}
							/>
						)}
						<Arrow.Down />
					</div>
				</div>
				<List />
			</div>
		</WrapTitle>
	)
}

Select.defaultProps = {
	nameKey: 'name',
	chooseValue: '',
	name: 'name',
	size: 4,
	onOpen: () => {},
	onClear: () => {}
}
