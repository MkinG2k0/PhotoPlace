import { MapWrap } from 'Components/Map/Map'
import { FC } from 'react'

import { AllPlace } from '../../Components/AllPlace/AllPlace'
import { Draggable } from '../../Components/Draggable/Draggable'
import style from './Map.module.scss'

const Map: FC = () => {
	return (
		<div className={style.wrap}>
			<MapWrap />
			<AllPlace />
			{/*<Draggable />*/}
		</div>
	)
}

export default Map
