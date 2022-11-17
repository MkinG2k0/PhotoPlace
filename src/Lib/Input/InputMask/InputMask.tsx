import { WrapTitle } from '@comp'
import { cn } from '@helper'
import { validatePhone, validatePhoneLength } from 'Helper/validator'
import { FC, useRef, useState } from 'react'
import ReactInputMask from 'react-input-mask'

import style from '../InputField/Input.module.scss'
import { InputMaskProps } from './IInputMask'

export const InputMask: FC<InputMaskProps> = ({
	name = '',
	value,
	fontSize,
	mask = '',
	required,
	classInput,
	onChange,
	maskChar,
	placeholder,
	title = '',
	...Wrap
}) => {
	const ref = useRef(null)
	const [valid, setValid] = useState(true)
	const [inputValue, setInputValue] = useState(value)
	const clInput = cn({}, style.input, `f-${fontSize}`, classInput!)

	const onChangeInput = (e) => {
		const value = e.target.value
		const lengthValue = validatePhone(value).length
		const len = validatePhoneLength(placeholder || '').length
		const valid = lengthValue === len
		setValid(valid)
		setInputValue(value)
		onChange?.(value, name, valid, title, ref)
	}

	return (
		<WrapTitle {...Wrap} title={title} validInput={valid}>
			<ReactInputMask
				value={inputValue}
				mask={mask}
				className={clInput}
				onChange={onChangeInput}
				required={required}
				ref={ref}
				typeof={'phoneNumber'}
				placeholder={placeholder}
			/>
		</WrapTitle>
	)
}

InputMask.defaultProps = {
	mask: '+7(999)999-99-99',
	placeholder: '+7(___)___-__-__',
	maskChar: '_',
	fontSize: 1,
	name: 'name',
	value: '',
	classInput: '',
	onChange: () => {}
}
