import { Routes, Route, useMatch } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import "./App.css"
import Franchise from "./components/Franchise/Franchise"
import HomePage from "./components/HomePage/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import { data } from "./data/db_new"
import ContactForm from "./components/Contact/ContactForm"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"
import NewsSection from "./components/Blog/NewsSection"
import Main from "./components/About/Main"
import PartnerWithUs from "./components/PartnerWithUs/PartnerWithUs"
import Newnav from "./components/newnav/Newnav"
import BrandPage from "./components/BrandPage/BrandPage"
import ComingSoon from "./components/TopCategories/ComingSoon"
import FoodAndBeverage from "./components/TopCategories/FoodAndBeverage"
import TopCategories from "./components/TopCategories/TopCategories"

const App = () => {
	const match = useMatch("/franchise/:id")
	const franchise = match
		? data.find((franchise) => franchise.id === Number(match.params.id))
		: null

	return (
		<>
			{/* <NavBar/> */}
			<Newnav />
			<div>
				<Routes>
					<Route
						path="/franchise/:id"
						element={<Franchise franchise={franchise} />}
					/>
					<Route path="/" element={<HomePage />} />
					<Route path="/blog" element={<NewsSection />} />
					<Route path="/" element={<TopCategories />} />
                <Route path="/category1" element={<ComingSoon />} />
                <Route path="/category2" element={<FoodAndBeverage />} />
                <Route path="/category3" element={<ComingSoon />} />
					<Route path="/contact-us" element={<ContactForm />} />
					<Route path="/about-us" element={<Main />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route
						path="/partner-with-us"
						element={<PartnerWithUs />}
					/>
					<Route
						path="/franchises"
						element={<BrandPage/>}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	)
}

export default App
