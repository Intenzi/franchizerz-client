import { Routes, Route, useMatch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./App.css"
import Franchise from "./components/Franchise/Franchise"
import HomePage from "./components/HomePage/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"

import { data } from "./data/db_new"
import ContactForm from "./components/NewHero/ContactForm"

const App = () => {
	const match = useMatch("/franchise/:id")
	const franchise = match
		? data.find((franchise) => franchise.id === Number(match.params.id))
		: null

	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/franchise/:id"
					element={<Franchise franchise={franchise} />}
				/>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact-us" element={<ContactForm/>} />
				
			</Routes>
			<Footer />
		</>
	)
}

export default App
