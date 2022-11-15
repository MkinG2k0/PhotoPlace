import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './User.ExReducers'
import { initialState } from './User.Init'
import { reducers } from './User.Reducers'

const slice = createSlice({
	name: 'User',
	initialState,
	reducers,
	extraReducers
})

export const { setUser } = slice.actions

export const User = slice.reducer

