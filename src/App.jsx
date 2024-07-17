import { Routes, Route, useMatch } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import "./App.css"
import Franchise from "./components/Franchise/Franchise"

import HomePage from "./components/HomePage/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar/NavBar"
import { data } from "./data/db_new"
import NewsSection from "./components/Blog/NewsSection"
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

const App = () => {
	const match = useMatch("/franchise/:id")
	const franchise = match
		? data.find((franchise) => franchise.id === Number(match.params.id))
		: null

	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path="/franchise/:id"
					element={<Franchise franchise={franchise} />}
				/>
				<Route path="/blog" element={<NewsSection />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
				
			</Routes>
			{/* <Footer /> */}
		</>
	)
}

export default App
