import "./FranchiseData.css"
import SideBrochure from "../SideBrochurePanel/SideBrochure"
const FranchiseData = ({ franchise }) => {
	const {
		img,
		name,
		cost,
		outlets,
		requirements,
		avgsales,
		profit,
		margin,
		growth,
	} = franchise

	return (
		<section data-theme="light" className="product-section pico">
			<img
				src={img}
				style={{ width: "20%", height: "20%" }}
				alt="Product Image"
				className="product-image"
			/>
			<div className="product-content">
				<h2>{name}</h2>
				<p>Success Rating: ⭐4.5/5</p>
				<p>
					<strong>Investment Cost: </strong>
					{cost}
				</p>
				<p>
					<strong>Outlets: </strong>
					{outlets}
				</p>
				<p>
					<strong>Requirements: </strong>
					{requirements}
				</p>
				<p>
					<strong>Avg Sales Per Month: </strong>
					{avgsales}
				</p>
				<p>
					<strong>Net Profit: </strong>
					{profit}
				</p>
				<p>
					<strong>Net Margin: </strong>
					{margin}
				</p>
				<p>
					<strong>Growth: </strong>
					{growth}
				</p>
			</div>
			<SideBrochure name={name} className='downloadBrochure'/>
		</section>
	)
}

export default FranchiseData
