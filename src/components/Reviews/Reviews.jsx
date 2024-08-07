import { useState } from "react";
import styles from "../ReviewCard/ReviewCard.module.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import ArrowLogo from "../../images/arrow.svg";
import StarRatings from "react-star-ratings";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Reviews = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Function to return average rating value.
  const averageRating = (review) => {
    let sum = 0;
    for (let i = 0; i < review.length; i++) {
      sum += review[i].rating;
    }
    let r = sum / review.length;
    return r;
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * reviewsPerPage;
  const selectedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <div className={styles.mainContainer}>
		<IconButton onClick={handlePrevious} disabled={currentPage === 0} sx={{ color: currentPage === 0 ? 'lightblue' : '#0096ff' }}>
            <ArrowBackIosIcon />
        </IconButton>
      <div className={styles.subMainContainer}>
        <div className={styles.headerContainer}>
          <p className={styles.mainHeadText}>User Reviews</p>
        </div>
        <div className={styles.reviewCardSlider}>
          {selectedReviews.map((review, index) => (
            <ReviewCard
              ratings={review.rating}
              customerName={review.customerName}
              key={index}
              date={review.datePosted}
              reviewHead={review.reviewHeading}
              reviewText={review.reviewParagraph}
            />
          ))}
        </div>
      </div>
		<IconButton onClick={handleNext} disabled={currentPage === totalPages - 1}  sx={{ color: currentPage === totalPages - 1 ? 'lightblue' : '#0096ff' }}>
			<ArrowForwardIosIcon />
		</IconButton>
    </div>
  );
};

export default Reviews;
