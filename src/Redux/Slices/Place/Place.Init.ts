import { PlaceModel } from './Place.Model'

export const initialState: PlaceModel = {
	places: {
		status: 'idle',
		data: []
	},
	currentPlace: {
		images: [''],
		address: 'address',
		title: 'title',
		userId: '',
		videos: [],
		position: [1, 3],
		description: 'description'
	}
}
