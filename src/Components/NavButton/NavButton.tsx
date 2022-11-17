import { Button } from '@lib'
import { IButton } from 'Lib/Input/Button/IButton'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface NavLinkProps extends IButton {
	to: string
	openNewPage?: boolean
}

export const NavButton: FC<NavLinkProps> = ({
	to,
	name = '',
	onClick,
	openNewPage,
	...btn
}) => {
	const history = useNavigate()

	const onPush = (e) => {
		history(to)
		onClick?.(name, e)
	}

	if (openNewPage) {
		return (
			<a href={to} target={'_blank'} rel="noreferrer">
				<Button {...btn} />
			</a>
		)
	}

	return <Button onClick={onPush} {...btn} />
}

NavButton.defaultProps = {
	type: 'none',
	fontSize: 6,
	openNewPage: false
}
