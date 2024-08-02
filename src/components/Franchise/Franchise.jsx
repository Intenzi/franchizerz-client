// import React from 'react';
import PropTypes from 'prop-types';
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

Franchise.propTypes = {
  franchise: PropTypes.shape({
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Franchise;
