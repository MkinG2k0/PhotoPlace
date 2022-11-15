import { useStore } from 'Redux/Store/Redux.hooks'

export const GetUser = () => useStore(({User}) => User)

