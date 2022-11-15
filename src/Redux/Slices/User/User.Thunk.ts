import { Error } from '@ReduxHelper'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'Api/services/User'

export const fetchLogin = createAsyncThunk<
	R_User.Base,
	Q_User.Login,
	{ rejectValue: string }
>('fetch/login', async function (_, { rejectWithValue }) {
	const data = await User.Login()
	Error(data, rejectWithValue)

	return data.data
})

export const fetchRegister = createAsyncThunk<
	R_User.Base,
	Q_User.Register,
	{ rejectValue: string }
>('fetch/register', async function (_, { rejectWithValue }) {
	const data = await User.Register()

	Error(data, rejectWithValue)

	return data.data
})
