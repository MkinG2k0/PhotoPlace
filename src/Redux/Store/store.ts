import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Place } from 'Redux/Slices/Place/Place.Slice'
import { User } from 'Redux/Slices/User/User.Slice'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ User, Place })

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['none']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat()
})

export const persist = persistStore(store)

export type RootReducerType = typeof rootReducer
