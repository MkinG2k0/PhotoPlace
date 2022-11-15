import { PayloadAction } from '@reduxjs/toolkit'
import { UserModel } from 'Redux/Slices/User/User.Model'

import { fetchLogin, fetchRegister } from './User.Thunk'

export const extraReducers = {
	[fetchLogin.fulfilled.type]: (
		state: UserModel,
		action: PayloadAction<R_User.Base>
	) => {
		state.profile = action.payload
	},
	[fetchRegister.fulfilled.type]: (
		state: UserModel,
		action: PayloadAction<R_User.Base>
	) => {
		state.profile = action.payload
	}
}
