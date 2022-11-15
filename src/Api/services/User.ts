import { Req } from 'Interface/Axios'

import { http } from '../http'

const path_login = 'login'
const path_register = 'register'

const Login = (): Req<R_User.Base> => http.post(path_login)
const Register = (): Req<R_User.Base> => http.post(path_register)

export const User = {
	Login,
	Register
}
