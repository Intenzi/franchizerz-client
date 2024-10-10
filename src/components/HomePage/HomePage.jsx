import NewHero from "../NewHero/NewHero"
import Card from "../Card/Card"
import ProductCard from "../ProductCard/ProductCard"
import TopChoices from "../TopChoices/TopChoices"
import TopCategories from "../TopCategories/TopCategories"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrendingChoices from "../TrendingChoices/TrendingChoices"
import ContactForm from '../Contact/ContactForm'
import ScrollToTop from "../ScrollToTop/ScrollToTop"





const HomePage = () => (
	<>
		
		<NewHero />
		<TopCategories />
			<ScrollToTop />
		<Routes>
		<Route path="/" element={<TopChoices />} />
		</Routes>
		<TrendingChoices />
		<ContactForm/>

	</>
)

export default HomePage
