import { PointCloudLayer } from '@deck.gl/layers'
import DeckGL from 'deck.gl'
import { FC } from 'react'
import { Map } from 'react-map-gl'

import style from './Map.module.scss'

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_API_MAP || ''
const MAP_STYLE = 'mapbox://styles/mking2k0/clal2hq99000l14quc4mbkzuy'

const INITIAL_VIEW_STATE = {
	longitude: 47.505,
	latitude: 42.976476,
	zoom: 15,
	pitch: 55,
	bearing: 0
}

const data = [
	{ position: [47.505, 42.976476] },
	{ position: [47.505, 42.946476] },
	{ position: [47.525, 42.946476] }
]

export const MapWrap: FC = () => {
	const layers = [
		new PointCloudLayer({ id: 'point-layer', data, radiusPixels: 4 })
	]

	return (
		<div className={style.wrap}>
			<DeckGL
				initialViewState={INITIAL_VIEW_STATE}
				controller={true}
				layers={layers}
			>
				<Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} mapStyle={MAP_STYLE} />
			</DeckGL>
		</div>
	)
}
