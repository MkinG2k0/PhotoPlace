import { setStatus } from '@ReduxHelper'
import { PayloadAction } from '@reduxjs/toolkit'

import { FileNameModel } from './FileName.Model'
import { fetchExample } from './FileName.Thunk'

export const extraReducers = {
	[fetchExample.pending.type]: (state: FileNameModel, action) =>
		setStatus(state.data, action, 'pending'),
	[fetchExample.rejected.type]: (state: FileNameModel, action) =>
		setStatus(state.data, action, 'rejected'),
	[fetchExample.fulfilled.type]: (
		state: FileNameModel,
		action: PayloadAction<string>
	) => {
		setStatus(state.data, action, 'fulfilled')
		state.data.data = action.payload
	}
}

