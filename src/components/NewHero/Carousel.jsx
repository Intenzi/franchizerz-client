import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import "./styles/Carousel.css"

const slides = [
	{ id: 1, url: "mcdonalds.png" },
	{ id: 2, url: "dominos.jpeg" },
	{ id: 3, url: "feature-2.avif" },
]

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const carouselRef = useRef(null)
	const slideInterval = 3000 // Interval in milliseconds (3 seconds)

	// Handle automatic slide change
	useEffect(() => {
		let intervalId

		const handleInterval = () => {
			if (!isPaused) {
				intervalId = setInterval(() => {
					nextSlide()
				}, slideInterval)
			}
		}

		handleInterval()

		return () => clearInterval(intervalId)
	}, [currentIndex, isPaused])

	// Pause on hover
	const handlePause = () => {
		setIsPaused(true)
	}

	// Resume on hover out
	const handleResume = () => {
		setIsPaused(false)
	}

	// Move to previous slide
	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		)
	}

	// Move to next slide
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
	}

	// Go to specific slide by index
	const goToSlide = (index) => {
		setCurrentIndex(index)
	}

	return (
		<div
			ref={carouselRef}
			className="carousel-container"
			onMouseEnter={handlePause}
			onMouseLeave={handleResume}
		>
			<div className="carousel">
				{slides.map((slide, index) => (
					<Link key={slide.id} to={`/franchise/${currentIndex + 1}`}>
						<img
							key={slide.id}
							src={slide.url}
							className={`slide ${
								index === currentIndex ? "active" : ""
							}`}
							alt={`Slide ${index + 1}`}
						></img>
					</Link>
				))}
				<button className="nav prev" onClick={prevSlide}>
					<BsChevronCompactLeft size={30} />
				</button>
				<button className="nav next" onClick={nextSlide}>
					<BsChevronCompactRight size={30} />
				</button>
			</div>
			<div className="dots">
				{slides.map((_, index) => (
					<span
						key={index}
						className={`dot ${
							index === currentIndex ? "active" : ""
						}`}
						onClick={() => goToSlide(index)}
					>
						{/* <RxDotFilled /> */}
					</span>
				))}
			</div>
		</div>
	)
}

export default Carousel
