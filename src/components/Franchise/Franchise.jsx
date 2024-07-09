import FranchiseData from "../FranchiseData/FranchiseData"
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz"
import FranchiseModels from "../FranchiseModels/FranchiseModels"
import Reviews from "../Reviews/Reviews"

const Franchise = ({ franchise }) => (
	<>
		<FranchiseData franchise={franchise} />
		<WhyFranchizerz />
		<FranchiseModels />
		<Reviews reviews={franchise.reviews} />
	</>
)

export default Franchise
