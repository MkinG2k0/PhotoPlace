import { useStore } from 'Redux/Store/Redux.hooks'

export const GetData = () => useStore(({ preview }) => preview)
	
