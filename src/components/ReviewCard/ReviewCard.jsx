import styles from "./ReviewCard.module.css"
import blankProfile from "../../images/blank_profile_pic.jpg"
import StarRatings from "react-star-ratings"
import LikeLogo from "../../images/like.svg"
import DislikeLogo from "../../images/dislike.svg"

const ReviewCard = ({
	imageURL,
	customerName,
	date,
	reviewHead,
	reviewText,
	likes,
	dislikes,
	ratings,
}) => {
	return (
		<div className={styles.cardHolder}>
			<div className={styles.card1}>
				<div className={styles.imageContainer}>
					<img
						src={blankProfile}
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

export default ReviewCard
