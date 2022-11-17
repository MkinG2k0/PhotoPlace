import { FC } from 'react'

interface GateProps {
	open?: boolean
}

export const Gate: FC<GateProps> = ({ open, children }) => {
	if (!open) return null

	return <>{children}</>
}
