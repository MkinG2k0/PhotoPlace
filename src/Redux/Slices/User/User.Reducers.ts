import { PayloadAction } from '@reduxjs/toolkit'

import { UserModel } from './User.Model'

export const reducers = {
	setUser(
		state: UserModel,
		action: PayloadAction<{ name: string; value: string }>
	) {
		const { value, name } = action.payload
		state.profile[name] = value
	}
}
