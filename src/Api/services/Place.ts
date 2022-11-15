import { Req } from 'Interface/Axios'

import { http } from '../http'

const path_places = 'places'

const GetPlaces = (): Req<R_Place.Base[]> => http.post(path_places)

export const Place = {
	GetPlaces
}
