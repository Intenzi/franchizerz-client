import { useEffect, useRef } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { FaCreditCard, FaWallet, FaMoneyBillAlt } from "react-icons/fa"

const franchiseModels = [
	{
		id: 1,
		name: "Express",
		icon: <FaCreditCard className="h-6 w-6 text-teal-600" />,
		areaRequired: "400 - 500",
		totalInvestment: "20-25",
		totalSales: "5 lakh",
		employees: "10",
	},
	{
		id: 2,
		name: "Platinum",
		icon: <FaWallet className="h-6 w-6 text-purple-600" />,
		areaRequired: "2000 - 2500",
		totalInvestment: "55-60",
		totalSales: "5 lakh",
		employees: "10",
	},
	{
		id: 3,
		name: "Gold",
		icon: <FaMoneyBillAlt className="h-6 w-6 text-yellow-600" />,
		areaRequired: "400 -500",
		totalInvestment: "20-25",
		totalSales: "5 lakh",
		employees: "10",
	},
]

function FranchiseModels() {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({ container: containerRef })

	return (
		<div className="flex h-screen">
			<div className="w-1/3 p-6 bg-gradient-to-b from-blue-700 to-white h-screen overflow-y-auto">
				<h1 className="text-4xl mt-16 font-bold mb-4 text-gray-700">
					Franchise Models
				</h1>
			</div>
			<div
				className="w-2/3 ml-[33.33%] h-screen overflow-y-scroll"
				ref={containerRef}
			>
				<Cards scrollYProgress={scrollYProgress} />
			</div>
		</div>
	)
}

function Cards({ scrollYProgress }) {
	return (
		<div className="relative h-[300vh]">
			{franchiseModels.map((model, index) => (
				<Card
					key={model.id}
					card={model}
					index={index}
					scrollYProgress={scrollYProgress}
					totalCards={franchiseModels.length}
				/>
			))}
		</div>
	)
}

function Card({ card, index, scrollYProgress, totalCards }) {
	const controls = useAnimation()
	const y = useTransform(
		scrollYProgress,
		[
			(index - 1) / totalCards,
			index / totalCards,
			(index + 1) / totalCards,
		],
		["100vh", "0vh", "-100vh"]
	)

	const scale = useTransform(
		scrollYProgress,
		[
			(index - 1) / totalCards,
			index / totalCards,
			(index + 1) / totalCards,
		],
		[0.9, 1, 0.9]
	)

	const opacity = useTransform(
		scrollYProgress,
		[
			(index - 1) / totalCards,
			index / totalCards,
			(index + 1) / totalCards,
		],
		[0.5, 1, 0.5]
	)

	useEffect(() => {
		if (index === 0) {
			controls.start({ y: "0vh", scale: 1, opacity: 1 })
		}
	}, [index, controls])

	return (
		<motion.div
			className="absolute w-full bg-white p-6 rounded-lg shadow-xl flex flex-col border-t-4 border-blue-500 my-6"
			style={{
				y: index === 0 ? controls : y,
				scale,
				opacity,
				top: `${(index / totalCards) * 100}vh`,
			}}
			initial={
				index === 0 ? { y: "20vh", scale: 0.9, opacity: 0.5 } : false
			}
			animate={index === 0 ? controls : undefined}
		>
			<div className="flex items-center mb-4">
				{card.icon}
				<h2 className="text-2xl font-semibold ml-4 text-gray-800">
					{card.name}
				</h2>
			</div>
			<div className="grid grid-cols-2 gap-4 text-gray-700">
				<p>
					Area Required:{" "}
					<span className="font-bold">{card.areaRequired} sq ft</span>
				</p>
				<p>
					Total Investment:{" "}
					<span className="font-bold">
						{card.totalInvestment} Lakhs
					</span>
				</p>
				<p>
					Total Sales:{" "}
					<span className="font-bold">{card.totalSales}</span>
				</p>
				<p>
					Employees:{" "}
					<span className="font-bold">{card.employees}</span>
				</p>
			</div>
		</motion.div>
	)
}

export default FranchiseModels
