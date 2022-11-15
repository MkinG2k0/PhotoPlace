import { Error } from '@ReduxHelper'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Place } from 'Api/services/Place'

export const fetchPlaces = createAsyncThunk<
	R_Place.Base[],
	void,
	{ rejectValue: string }
>('fetch/places', async function (_, { rejectWithValue }) {
	const data = await Place.GetPlaces()

	Error(data, rejectWithValue, 'error:fetch/places')

	return data.data
})
