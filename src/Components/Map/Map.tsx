import { IconLayer } from '@deck.gl/layers'
import DeckGL from 'deck.gl'
import { FC } from 'react'
import { Map } from 'react-map-gl'

import style from './Map.module.scss'

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_API_MAP || ''
const MAP_3D_STYLE = 'mapbox://styles/mking2k0/clal2hq99000l14quc4mbkzuy'
const MAP_2D_STYLE = 'mapbox://styles/mking2k0/clal3pcmm004k14ntvixihrg9'

const INITIAL_VIEW_STATE = {
	longitude: 47.505,
	latitude: 42.976476,
	zoom: 15,
	pitch: 55,
	bearing: 0
}
const ICON_MAPPING = {
	marker: { x: 0, y: 0, width: 29, height: 34, mask: false }
}
const data = [
	{ position: [47.505, 42.976476] },
	{ position: [47.505, 42.946476] },
	{ position: [47.525, 42.946476] }
]

const data2 = [
	{
		name: 'Colma (COLM)',
		address: '365 D Street, Colma CA 94014',
		exits: 4214,
		coordinates: [47.505, 42.976476]
	},
	{
		name: 'Colma (COLM)',
		address: '365 D Street, Colma CA 94014',
		exits: 4214,
		coordinates: [47.505, 42.946476]
	},
	{
		name: 'Colma (COLM)',
		address: '365 D Street, Colma CA 94014',
		exits: 4214,
		coordinates: [47.525, 42.946476]
	}
]

export const MapWrap: FC = () => {
	const layers = new IconLayer({
		id: 'icon-layer',
		data: data2,
		pickable: true,
		iconAtlas: '/point.svg',
		iconMapping: ICON_MAPPING,
		getIcon: (d) => 'marker',
		sizeScale: 3,
		getPosition: (d) => d.coordinates,
		getSize: (d) => 10,
		getColor: (d) => [Math.sqrt(d.exits), 140, 0]
	})

	return (
		<div className={style.wrap}>
			<DeckGL
				initialViewState={INITIAL_VIEW_STATE}
				controller={true}
				layers={layers}
			>
				<Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} mapStyle={MAP_3D_STYLE} />
			</DeckGL>
		</div>
	)
}
