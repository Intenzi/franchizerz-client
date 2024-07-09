import NewHero from "../NewHero/NewHero"
import Card from "../Card/Card"
import CustomCard from "../CustomizedCard/CustomCard"
import { data1, data2, data3 } from "../../data/db"

const HomePage = () => (
	<>
		{/* <Header/> */}
		{/* <Hero/> */}
		<NewHero />
		<Card />
		<CustomCard heading="Top Choices" data={data1} />
		<CustomCard heading="Featured Oppurtunities" data={data2} />
		<CustomCard heading="Featured Oppurtunities" data={data3} />
	</>
)

export default HomePage
