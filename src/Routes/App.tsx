import 'Style/font.scss'
import 'Style/global.scss'
import 'Style/mix.scss'

import { Layout } from 'Components/Layout/Layout'
import { FC, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { persist, store } from 'Redux/Store/store'
import { PersistGate } from 'redux-persist/integration/react'

import { components } from './Routes'

export function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persist} loading={<Loader />}>
				<BrowserRouter>
					<Layout>
						<Suspense fallback={<Loader />}>
							<Routes>
								{components.map(({ path, Component }) => (
									<Route key={path} path={path} element={<Component />} />
								))}
							</Routes>
						</Suspense>
					</Layout>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

const Loader: FC = () => {
	return <>Load</>
}
