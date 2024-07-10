import FranchiseData from "../FranchiseData/FranchiseData"
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz"
import FranchiseModels from "../FranchiseModels/FranchiseModels"
import Reviews from "../Reviews/Reviews"
import BrochureDownload from "../DownloadBrochure/BrochureDownload"

const Franchise = ({ franchise }) => (
	<>
		<FranchiseData franchise={franchise} />
		<WhyFranchizerz />
		<FranchiseModels />
		<BrochureDownload />
		<Reviews reviews={franchise.reviews} />
	</>
)

export default Franchise
