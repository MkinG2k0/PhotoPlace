import { PayloadAction } from '@reduxjs/toolkit'

import { PlaceModel } from './Place.Model'

export const reducers = {
	setCurrentPlace(
		state: PlaceModel,
		action: PayloadAction<R_Place.Base | undefined>
	) {
		state.currentPlace = action.payload
	}
}
