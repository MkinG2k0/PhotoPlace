import { WrapTitleProps } from 'Lib/WrapTitle/IWrapTitle'

import { IInputProps } from '../InputField/IInputField'

export interface InputMaskProps extends WrapTitleProps, IInputProps {
	mask?: string
	maskChar?: any
}
