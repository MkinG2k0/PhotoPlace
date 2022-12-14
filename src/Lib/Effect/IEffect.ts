export interface IEffectProps {
	type?: TType
	duration?: AnimDuration
	open?: boolean
	wh?: boolean
	width?: TStyleSize
	height?: TStyleSize
	onEndAnim?: TCallAnim
	onStartAnim?: TCallAnim
}

type TType = 'zoom' | 'fade'
type TCallAnim = (e: any) => void
type TStyleSize = number | string
