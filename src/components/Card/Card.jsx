import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Card.css"

const Card = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "60px",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
				},
			},
		],
	}

	const data = [
		{
			id: 1,
			name: "Coca Cola",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
		{
			id: 2,
			name: "Star Bucks",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
		{
			id: 3,
			name: "Star Bucks",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
		{
			id: 4,
			name: "Star Bucks",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
		{
			id: 5,
			name: "Star Bucks",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
		{
			id: 6,
			name: "Star Bucks",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
		{
			id: 7,
			name: "Star Bucks",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
		{
			id: 8,
			name: "Star Bucks",
			image: "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
		},
	]

	return (
		<section className="cards">
			<h1>Top Categories</h1>
			<div className="carousel-container1">
				<Slider {...settings}>
					{data.map((item) => (
						<div key={item.id} className="carousel-item">
							<div className="carousel-image">
								<img
									className="main-img"
									src={item.image}
									alt={item.name}
								/>
							</div>
							<div className="carousel-name">
								<p>{item.name}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default Card
