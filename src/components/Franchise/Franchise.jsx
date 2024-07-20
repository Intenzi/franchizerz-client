import FranchiseData from "../FranchiseData/FranchiseData"
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz"
import FranchiseModels from "../FranchiseModels/FranchiseModels"
import Reviews from "../Reviews/Reviews"
import Menu from "../MenuCard/Menu"
import FranchiseGallery from "../BrandGallery/franchiseGallery"

const Franchise = ({ franchise }) => (
	<>
		<FranchiseData franchise={franchise} />
		<WhyFranchizerz />
		<FranchiseModels />
		<Menu menuPhotos={franchise.menuPhotos}/>
		<FranchiseGallery galleryPhotos={franchise.brandGalleryPhotos}/>
		<Reviews reviews={franchise.reviews} />
	</>
)

export default Franchise
