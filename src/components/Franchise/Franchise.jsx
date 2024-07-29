import FranchiseData from "../FranchiseData/FranchiseData"
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz"
import FranchiseModels from "../FranchiseModels/FranchiseModels"
import Reviews from "../Reviews/Reviews"
import Menu from "../MenuCard/Menu"
import FranchiseGallery from "../BrandGallery/franchiseGallery"
import DownloadBrochure from "../DownloadBrochure/DownloadBrochure"

const Franchise = ({ franchise }) => (
	<>
		<FranchiseData franchise={franchise} />
		<WhyFranchizerz />
		<FranchiseModels />
		<Menu menuPhotos={franchise.menuPhotos}/>
		<FranchiseGallery galleryPhotos={franchise.brandGalleryPhotos}/>
		<DownloadBrochure />
		<Reviews reviews={franchise.reviews} />
	</>
)

export default Franchise
