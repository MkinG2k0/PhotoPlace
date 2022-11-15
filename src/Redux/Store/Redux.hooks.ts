import { useEffect, useState } from 'react'
import type { RootState } from 'Redux/Store/IRootSate'

import { store } from './store'

export function useStoreWithInitializer<T>(
	getter: (state: RootState) => T,
	initializer: () => void
) {
	const [state, setState] = useState(getter(store.getState()))
	useEffect(() => {
		const unsubscribe = store.subscribe(() =>
			setState(getter(store.getState()))
		)
		initializer()
		return unsubscribe
	}, [getter, initializer])
	return state
}

export function useStore<T>(getter: (state: RootState) => T) {
	return useStoreWithInitializer(getter, () => {})
}
