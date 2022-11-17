import 'Style/font.scss'
import 'Style/global.scss'
import 'Style/global-color.scss'
// import 'Style/mix.scss'
import 'Style/style.scss'
import 'swiper/css'

import { Layout } from 'Components/Layout/Layout'
import { FC, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { persist, store } from 'Redux/Store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { components } from 'Routes/NAV'

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
