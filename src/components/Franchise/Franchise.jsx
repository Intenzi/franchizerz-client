import FranchiseData from "../FranchiseData/FranchiseData"
import Menu from "../MenuCard/Menu"
import FranchiseGallery from "../BrandGallery/franchiseGallery"
import PricingSection from "../PricingSection/PricingSection"
import AboutTheBrand from "../AboutTheBrand/AboutTheBrand"
import FranchizerzWhy from "../FranchizerzWhy/FranchizerzWhy"
import { franchiseFeatures, pricingModels } from "../../data/franchiseFeatures";
import { testimonials } from "../Feedback/data/index"
import Feedbacks from "../Feedback/Feedback"

const Franchise = ({ franchise }) =>  {

		const franchiseName = franchise.name;
		const features = franchiseFeatures[franchiseName] || [];
		const aboutDescription = franchise.description || "Description not available";
		const { baseFeatures, proFeatures, enterpriseFeatures , baseTitle, proTitle, enterpriseTitle } = pricingModels[franchiseName] || {};
		const franchiseTestimonials = testimonials[franchise.name] || [];
	return (
	<>
		<div style={{ backgroundColor: "black", margin: "0", padding: "0" }}>
			<FranchiseData franchise={franchise} />
			<AboutTheBrand brandName={franchiseName} description={aboutDescription} />
			<FranchizerzWhy features={features} />
			<PricingSection
                baseFeatures={baseFeatures}
                proFeatures={proFeatures}
                enterpriseFeatures={enterpriseFeatures}
				baseTitle={baseTitle} 
                proTitle={proTitle} 
                enterpriseTitle={enterpriseTitle} 
            />
			<Menu menuPhotos={franchise.menuPhotos} />
			<FranchiseGallery galleryPhotos={franchise.brandGalleryPhotos} />
		</div>

		<Feedbacks
      testimonials={franchiseTestimonials}
        sectionTitle={`Hear from other ${franchise.name} Franchise Owners`}
        subTitle=""
      />
  
	</>
);
};

export default Franchise;
