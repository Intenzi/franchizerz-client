import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./CustomCard.module.css"

const CustomCard = ({ title, heading, data }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "60px",
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
				},
			},
		],
	}

	return (
		<section className={styles.customCards}>
			<h1>{heading}</h1>
			<div className={styles.customCardCarouselContainer}>
				<Slider {...settings}>
					{data.map((item) => (
						<div
							key={item.id}
							className={styles.customCardCarouselItem}
						>
							<div className={styles.customCard}>
								<img
									className={styles.customCardImgTop}
									src={item.image}
									alt={item.name}
								/>
								<div className={styles.customCardBody}>
									<h5 className={styles.customCardTitle}>
										{item.name}
									</h5>
									<p className={styles.customCardText}>
										{item.title}
									</p>
									<a
										href=""
										className={`${styles.btn} ${styles.btnPrimary}`}
									>
										Explore
									</a>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default CustomCard
