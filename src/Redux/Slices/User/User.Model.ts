export interface UserModel {
	profile: {
		firsName: string
		secondName: string
		photo: string
	}
	auth: {
		login?: string
		password?: string
	}
}
