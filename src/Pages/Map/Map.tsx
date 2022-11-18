import { MapWrap } from 'Components/Map/Map'
import { FC } from 'react'

import style from './Map.module.scss'

const Map: FC = () => {
	return (
		<div className={style.wrap}>
			<MapWrap />
		</div>
	)
}

export default Map
