import { PayloadAction } from '@reduxjs/toolkit'

import { FileNameModel } from './FileName.Model'

export const reducers = {
	reducerExample(state: FileNameModel, action: PayloadAction<string>) {
		state.data.data = action.payload
	}
}

