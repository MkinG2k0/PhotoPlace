export interface SelectProps {
	data?: Item[]
	onClear?: (name: string) => void
	onOpen?: (name: string) => void
	onChange?: (item: Record<string, unknown>, name: string) => void
	nameKey?: string
	spread?: any
	title?: string
	name?: string
	chooseValue?: string
	size?: Size
	required?: boolean
	fontSizeTitle?: Size
	onChooseClear?: boolean
}
