// import React from "react"
import PropTypes from "prop-types"
import styles from "./ReviewCard.module.css"
import blankProfile from "../../images/blank_profile_pic.jpg"
import StarRatings from "react-star-ratings"
import { ReactComponent as LikeLogo } from "../../images/like.svg"
import { ReactComponent as DislikeLogo } from "../../images/dislike.svg"

const ReviewCard = ({
  imageURL,
  customerName,
  date,
  reviewHead,
  reviewText,
//   likes,
//   dislikes,
  ratings,
}) => {
  return (
    <div className={styles.cardHolder}>
      <div className={styles.card1}>
        <div className={styles.imageContainer}>
          <img
            src={imageURL || blankProfile}
            alt="Profile"
            className={styles.image}
          />
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.name}>{customerName}</p>
        </div>
        <div className={styles.ratingContainer}>
          <StarRatings
            rating={ratings}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="2px"
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.dateCont}>Posted on {date}</p>
          <p className={styles.reviewHead}>{reviewHead}</p>
          <p className={styles.reviewPara}>{reviewText}</p>
        </div>
        <div>
          <button className={styles.likbtn}>
            <LikeLogo className={styles.lklogo} fill="black" />
          </button>
          <button className={styles.likbtn}>
            <DislikeLogo className={styles.lklogo} fill="black" />
          </button>
        </div>
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  imageURL: PropTypes.string,
  customerName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  reviewHead: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  ratings: PropTypes.number.isRequired,
}

export default ReviewCard
