import { cn } from 'Helper/helper'
import { FC, useState } from 'react'

import { ChooseCompProps, ITabsProps, TabButtonProps } from './ITabs'
import style from './Tabs.module.scss'

export const Tabs: FC<ITabsProps> = ({
	components,
	children,
	defaultId = 0,
	load,
	typeB,
	canMove
}) => {
	const [currentId, setCurrentId] = useState(defaultId)

	return (
		<div className={style.wrap}>
			<div className={style.tab}>
				{components.map((comp, index) => (
					<TabButton
						path={comp.path}
						index={index}
						setCurrentId={setCurrentId}
						active={currentId === index}
						key={comp.path}
						canMove={canMove}
						typeB={typeB}
					/>
				))}
			</div>
			<div className={'style.wrapEdite'}>
				{load && <ChooseComp components={components} id={currentId} />}
				{!load && (
					<div className={'center'}>
						{/*<FontAwesomeIcon*/}
						{/*  icon={faSpinner}*/}
						{/*  spin={true}*/}
						{/*  className={Style.spinner}*/}
						{/*/>*/}
					</div>
				)}
				{children}
			</div>
		</div>
	)
}

Tabs.defaultProps = {
	typeB: 'button',
	canMove: true,
	load: true
}

const ChooseComp: FC<ChooseCompProps> = ({ components, id }) => {
	if (!components[id]) return null
	const Comp = components[id].component

	return <>{Comp}</>
}

const TabButton: FC<TabButtonProps> = ({
	path,
	index,
	active,
	setCurrentId,
	typeB,
	canMove
}) => {
	const classButton = cn({
		[style.nav]: true,
		[style.active]: active
	})

	function onClick() {
		if (canMove) setCurrentId(index)
	}

	return (
		<input
			type={typeB}
			className={classButton}
			onClick={onClick}
			value={path}
		/>
	)
}
