import { useStore } from 'Redux/Store/Redux.hooks'

export const GetPlace = () => useStore(({ Place }) => Place)

