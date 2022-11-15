import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './Place.ExReducers'
import { initialState } from './Place.Init'
import { reducers } from './Place.Reducers'

const slice = createSlice({
	name: 'Place',
	initialState,
	reducers,
	extraReducers
})

export const { setCurrentPlace } = slice.actions

export const Place = slice.reducer

