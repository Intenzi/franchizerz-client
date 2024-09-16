import FranchiseData from "../FranchiseData/FranchiseData"
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz"
import Reviews from "../Reviews/Reviews"
import Menu from "../MenuCard/Menu"
import FranchiseGallery from "../BrandGallery/franchiseGallery"
import PricingSection from "../PricingSection/PricingSection"
import AboutTheBrand from "../AboutTheBrand/AboutTheBrand"
import FeedbackCard from "../Feedback/Feedback"

const Franchise = ({ franchise }) => (
	<>
		<FranchiseData franchise={franchise} />
		<WhyFranchizerz />
		<PricingSection />
		<AboutTheBrand/>
		<Menu menuPhotos={franchise.menuPhotos}/>
		<FranchiseGallery galleryPhotos={franchise.brandGalleryPhotos}/>
		<FeedbackCard/>
	</>
)

export default Franchise
