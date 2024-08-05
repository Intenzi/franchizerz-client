import { Routes, Route, useMatch } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import "./App.css"
import Franchise from "./components/Franchise/Franchise"
import HomePage from "./components/HomePage/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar"
import { data } from "./data/db_new"
import ContactForm from "./components/Contact/ContactForm"
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import NewsSection from "./components/Blog/NewsSection"

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
				<Route path="/blog" element={<NewsSection />} />
				<Route path="/contact-us" element={<ContactForm/>} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
