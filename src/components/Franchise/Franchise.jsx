import FranchiseData from "../FranchiseData/FranchiseData"
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz"
import FranchiseModels from "../FranchiseModels/FranchiseModels"
import Reviews from "../Reviews/Reviews"
import BrochureDownload from "../DownloadBrochure/BrochureDownload"
import BrandForm from "../BrandForm/BrandForm"
const Franchise = ({ franchise }) => (
	<>
		<FranchiseData franchise={franchise} />
		<WhyFranchizerz />
		<FranchiseModels />
		<BrochureDownload />
		<BrandForm />
		<Reviews reviews={franchise.reviews} />
		
	</>
)

export default Franchise
