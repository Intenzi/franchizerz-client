import FranchiseData from "../FranchiseData/FranchiseData"
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz"
import Reviews from "../Reviews/Reviews"
import Menu from "../MenuCard/Menu"
import FranchiseGallery from "../BrandGallery/franchiseGallery"
import PricingSection from "../PricingSection/PricingSection"
import AboutTheBrand from "../AboutTheBrand/AboutTheBrand"

const Franchise = ({ franchise }) => (
	<>
		<FranchiseData franchise={franchise} />
		<WhyFranchizerz />
		<PricingSection />
		<AboutTheBrand/>
		<Menu menuPhotos={franchise.menuPhotos}/>
		<FranchiseGallery galleryPhotos={franchise.brandGalleryPhotos}/>
		<Reviews reviews={franchise.reviews} />
	</>
)

export default Franchise
