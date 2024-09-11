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
	index,
}) => {
	return (
		<div className={index%2===0?styles.cardHolder:styles.cardHolder2}>
			<div className={index%2===0?styles.card1:styles.card2}>
				<div className={styles.textContainer}>
					<p className={styles.reviewHead}>{reviewHead}</p>
					<p className={styles.reviewPara}>{reviewText}</p>
				</div>
				<div className={styles.nameContainer}>
					<p className={styles.name}>- {customerName}</p>
				</div>
				<div className={styles.imageContainer}>
					<img
						src={blankProfile}
						alt="Profile"
						className={styles.image}
					/>
				</div>
			</div>
		</div>
	)
}

export default ReviewCard
