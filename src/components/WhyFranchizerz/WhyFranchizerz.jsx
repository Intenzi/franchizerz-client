import styles from "./WhyFranchizerz.module.css"
import { FaCube } from "react-icons/fa" // Importing a 3D icon from react-icons

const WhyFranchizerz = () => {
	const features = [
		"Working with a well-established brand",
		"Readymade technology and operating system",
		"Nationwide aggressive campaigns",
		"R&D support of our organization",
		"Serving more than 1 lakh customers per month",
		"Marketing Support",
		"Low Cost Packaging",
		"Fast Growing Outlets",
	]

	return (
		<div data-theme="light" className={`pico ${styles.container1}`}>
			<h2 className={`pico ${styles.heading1}`}>Why Franchise With Us</h2>
			<div className={`pico ${styles.featuresGrid}`}>
				{features.map((feature, index) => (
					<div className={`pico ${styles.featureCard}`} key={index}>
						<FaCube className={`pico ${styles.icon1}`} />
						<p>{feature}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default WhyFranchizerz
