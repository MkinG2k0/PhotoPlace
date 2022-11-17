import { useInput } from 'Hook/Ref.hook'
import { WrapTitle } from 'Lib/WrapTitle/WrapTitle'
import { FC } from 'react'

import { ITextArea } from './ItextArea'
import style from './TextArea.module.scss'

export const TextArea: FC<ITextArea> = ({
	onChange = () => {},
	value = '',
	name = '',
	title,
	spread,
	required,
	onClickWrap,
	placeholder,
	height
}) => {
	const input = useInput(null, onChange, { value, name })

	return (
		<WrapTitle title={title} onClickWrap={onClickWrap}>
			<textarea
				className={style.wrap}
				placeholder={placeholder}
				{...input.spread}
				{...spread}
				required={required}
				style={{ height }}
			>
				{value}
			</textarea>
		</WrapTitle>
	)
}

TextArea.defaultProps = {
	onChange: () => {}
}
