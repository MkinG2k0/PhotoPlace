import { FC, ReactElement } from 'react'

interface OrProps {
	check: any
	True: ReactElement | null
	False: ReactElement | null
}

export const Show: FC<OrProps> = ({ check, False, True }) => {
	if (check) {
		return True
	} else {
		return False
	}
}
