import { UserModel } from './User.Model'

export const initialState: UserModel = {
	profile: {
		firsName: '',
		secondName: '',
		photo: ''
	},
	auth: {}
}
