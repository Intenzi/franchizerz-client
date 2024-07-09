import React, { useState } from "react"
import "./styles/SearchBar.css"
import data from "./TemplateData.json"

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("")
	const [filteredData, setFilteredData] = useState([])

	const handleChange = (event) => {
		const value = event.target.value
		setSearchTerm(value)
		if (value === "") {
			setFilteredData([])
		} else {
			const filtered = data.filter((val) =>
				val.title.toLowerCase().includes(value.toLowerCase())
			)
			setFilteredData(filtered)
		}
	}

	const handleSuggestionClick = (suggestion) => {
		setSearchTerm(suggestion.title)
		setFilteredData([])
	}

	return (
		<div className="appContainer">
			<div className="searchInput_Container">
				<input
					id="searchInput"
					type="text"
					placeholder="Search here..."
					value={searchTerm}
					onChange={handleChange}
				/>
				<i className="fa fa-search search-icon"></i>
			</div>
			{filteredData.length > 0 && (
				<div className="suggestions-list">
					{filteredData.map((val) => (
						<div
							key={val.id}
							className="suggestion-item"
							onClick={() => handleSuggestionClick(val)}
						>
							<img
								src={val.image}
								alt={val.title}
								className="suggestion-image"
							/>
							{val.title}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SearchBar
