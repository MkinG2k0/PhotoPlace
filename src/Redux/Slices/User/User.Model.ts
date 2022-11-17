export interface UserModel {
	profile: {
		firstName: string
		secondName: string
		photo: string
	}
	auth: {
		login?: string
		password?: string
	}
}
