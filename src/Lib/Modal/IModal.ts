export interface ModalProps extends CenterProps {
	open?: boolean
	onClose?: () => void
	duration?: AnimDuration
}

export interface CloseProps {
	onClose?: () => void
}

export interface CenterProps {
	YCenter?: boolean
	XCenter?: boolean
}
