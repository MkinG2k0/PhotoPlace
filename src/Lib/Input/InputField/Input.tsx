import { cn, mergeRefs } from 'Helper/helper'
import { validateMinMax } from 'Helper/validator'
import { useFocus, useInput } from 'Hook/Ref.hook'
import { WrapTitle } from 'Lib/WrapTitle/WrapTitle'
import { FC, useState } from 'react'

import { IInputProps } from './IInputField'
import style from './Input.module.scss'

export const Input: FC<IInputProps> = ({
	value = '',
	name = '',
	classInput = '',
	title = '',
	onChange = () => {},
	currentRef,
	spread,
	inputType,
	classWrap,
	placeholder,
	speedUpdate,
	fontSizeTitle,
	fontSize,
	required,
	children,
	disabled,
	minValue,
	maxValue,
	textOnly
}) => {
	const refInput = useInput(currentRef?.current, validMinMax, {
		name,
		speedUpdate,
		textOnly,
		value
	})
	const refFocus = useFocus(currentRef?.current, onFocus)
	const combineRef = mergeRefs(currentRef, refFocus.ref, refInput.ref)
	const [validInput, setValidInput] = useState(
		validateMinMax(value, minValue, maxValue)
	)

	function onFocus(focus: boolean, ref) {
		if (!focus) {
			setValidInput(validateMinMax(ref.current.value, minValue, maxValue))
		}
	}

	function validMinMax(value: string, name, ref) {
		const valid = validateMinMax(value, minValue, maxValue)
		setValidInput(valid)
		onChange(value, name, valid, title, ref)
	}

	const onClickWrap = () => refFocus.actionSetFocus(true)

	const cnInput = cn({}, style.input, `f-${fontSize}`, classInput)

	return (
		<WrapTitle
			title={title}
			onClickWrap={onClickWrap}
			classWrap={classWrap}
			fontSizeTitle={fontSizeTitle}
			validInput={validInput}
		>
			<input
				type={inputType}
				className={cnInput}
				ref={combineRef}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				{...spread}
				{...refInput.spread}
			/>
			{children}
		</WrapTitle>
	)
}

Input.defaultProps = {
	inputType: 'text',
	name: 'name',
	fontSizeTitle: 5,
	speedUpdate: 500,
	fontSize: 3,
	required: false,
	onChange: () => {},
	initValid: true,
	currentRef: { current: null }
}
