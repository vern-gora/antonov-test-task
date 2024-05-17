import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

const MainPage = lazy(() => import('../pages/MainPage/MainPage'))
const NotePage = lazy(() => import('../pages/NotePage/NotePage'))

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/note/:id?' element={<NotePage />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
