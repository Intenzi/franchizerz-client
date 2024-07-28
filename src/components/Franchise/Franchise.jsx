import React from 'react';
import FranchiseData from "../FranchiseData/FranchiseData";
import WhyFranchizerz from "../WhyFranchizerz/WhyFranchizerz";
import FranchiseModels from "../FranchiseModels/FranchiseModels";
import Reviews from "../Reviews/Reviews";
import PricingSection from "../PricingSection/PricingSection";

const Franchise = ({ franchise }) => (
  <>
    <FranchiseData franchise={franchise} />
    <WhyFranchizerz />
    <FranchiseModels />
    <PricingSection />
    <Reviews reviews={franchise.reviews} />
  </>
);

export default Franchise;
