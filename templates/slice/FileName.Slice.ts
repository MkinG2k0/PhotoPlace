import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './FileName.ExReducers'
import { initialState } from './FileName.Init'
import { reducers } from './FileName.Reducers'

const slice = createSlice({
	name: 'FileName',
	initialState,
	reducers,
	extraReducers
})

export const { reducerExample } = slice.actions

export const FileName = slice.reducer

