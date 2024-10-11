import "./FranchiseData.css"
import SideBrochure from "../SideBrochurePanel/SideBrochure"
const FranchiseData = ({ franchise }) => {
	const brochureFileName = `${franchise.name.replace(/\s+/g, '-')}.pdf`; // Example: Mahindra-Scorpio-Brochure.pdf
	const brandName = franchise.name;
	const {
		img,
		name,
		cost,
		outlets,
		requirements,
		avgsales,
		grossMargin,
		margin,
		// growth,
	} = franchise

	return (
		<section data-theme="light" className="product-section pico mb-4">
			<img
				src={img}
				alt="Product Image"
				className="product-image"
			/>
			<div className="product-content ">
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
					<strong>Gross Margin: </strong>
					{grossMargin}
				</p>
				<p>
					<strong>Net Margin: </strong>
					{margin}
				</p>
				{/* <p>
					<strong>Growth: </strong>
					{growth}
				</p> */}
				 <div className="mt-[50px]">
        <SideBrochure brochureFileName={brochureFileName} brandName={brandName} className='downloadBrochure' />
                </div>
			</div>
			
		</section>
	)
}

export default FranchiseData
