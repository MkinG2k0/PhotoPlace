import { setStatus } from '@ReduxHelper'
import { PayloadAction } from '@reduxjs/toolkit'

import { PlaceModel } from './Place.Model'
import { fetchPlaces } from './Place.Thunk'

export const extraReducers = {
	[fetchPlaces.pending.type]: (state: PlaceModel, action) =>
		setStatus(state.places, action, 'pending'),
	[fetchPlaces.rejected.type]: (state: PlaceModel, action) =>
		setStatus(state.places, action, 'rejected'),
	[fetchPlaces.fulfilled.type]: (
		state: PlaceModel,
		action: PayloadAction<R_Place.Base[]>
	) => {
		setStatus(state.places, action, 'fulfilled')
		state.places.data = action.payload
	}
}
