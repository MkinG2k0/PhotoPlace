import { UserModel } from './User.Model'

export const initialState: UserModel = {
	profile: {
		firstName: '',
		secondName: '',
		photo: ''
	},
	auth: {}
}
