// import Home from "../../assets/home.svg"
// import BrandName from "../../assets/logo.svg"
// import Logo from "../../assets/logo_1.svg"
// import Auth from "../../assets/auth.svg"
// import { NavLink } from "react-router-dom"
// import About from "../../assets/AboutUs.svg"
// import Blog from "../../assets/blog.svg"
// import styles from "../Navbar/Navbar.module.css"
// // import SearchBar from "../SearchBar/SearchBar";
// import Search from "../../assets/search.svg"

// export default function NavBar() {
// 	const activeLinkStyle = {
// 		fontWeight: "bold",
// 		color: "black",
// 		borderRadius: "1px",
// 	}
// 	return (
// 		<div>
// 			<nav className={styles.navigation}>
// 				<div>
// 					<ul className={styles.ul1}>
// 						<li className={styles.li}>
// 							<NavLink
// 								exact
// 								to="/"
// 								style={({ isActive }) =>
// 									isActive ? activeLinkStyle : undefined
// 								}
// 							>
// 								<div style={{ display: "flex" }}>
// 									<Logo className={styles.svglogo} />
// 									<BrandName
// 										className={styles.franchizerzlogo}
// 									/>
// 								</div>
// 							</NavLink>
// 						</li>

// 						<li className={styles.li}>
// 							<NavLink
// 								exact
// 								to="/"
// 								style={({ isActive }) =>
// 									isActive ? activeLinkStyle : undefined
// 								}
// 							>
// 								<Home className={styles.svglogo} />
// 							</NavLink>
// 						</li>

// 						<li className={styles.li}>
// 							<NavLink
// 								exact
// 								to="/contact-us"
// 								style={({ isActive }) =>
// 									isActive ? activeLinkStyle : undefined
// 								}
// 							>
// 								<About className={styles.svglogo} />
// 							</NavLink>
// 						</li>

// 						<li className={styles.li}>
// 							<NavLink
// 								exact
// 								to="/"
// 								style={({ isActive }) =>
// 									isActive ? activeLinkStyle : undefined
// 								}
// 							>
// 								<Search className={styles.searchlogo} />
// 							</NavLink>
// 						</li>

// 						<li className={styles.li}>
// 							<NavLink
// 								exact
// 								to="/blog"
// 								style={({ isActive }) =>
// 									isActive ? activeLinkStyle : undefined
// 								}
// 							>
// 								<Blog className={styles.svglogo} />
// 							</NavLink>
// 						</li>

// 						<li className={styles.li}>
// 							<NavLink
// 								exact
// 								to="/sign-in"
// 								style={({ isActive }) =>
// 									isActive ? activeLinkStyle : undefined
// 								}
// 							>
// 								<Auth className={styles.svglogo} />
// 							</NavLink>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>
// 		</div>
// 	)
// }


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../../assets/home.svg";
import BrandName from "../../assets/logo.svg";
import Logo from "../../assets/logo_1.svg";
import Auth from "../../assets/auth.svg";
import About from "../../assets/AboutUs.svg";
import Blog from "../../assets/blog.svg";
import SearchIcon from "../../assets/search.svg"; // Import your search icon here
import styles from "../Navbar/Navbar.module.css";

const suggestions = ["Home", "About Us", "Blog", "Sign In"];
const categories = ["Gold", "Platinum", "Express"];

export default function NavBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);

    const activeLinkStyle = {
        fontWeight: "bold",
        color: "black",
        borderRadius: "1px",
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setIsDropdownVisible(true);
        } else {
            setIsDropdownVisible(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setIsDropdownVisible(false);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsCategoryDropdownVisible(false);
    };

    return (
        <div>
            <nav className={styles.navigation}>
                <div>
                    <ul className={styles.ul1}>
                        <li className={styles.li}>
                            <NavLink
                                exact
                                to="/"
                                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                            >
                                <div style={{ display: "flex" }}>
                                    <Logo className={styles.svglogo} alt="Logo" />
                                    <BrandName className={styles.franchizerzlogo} alt="BrandName" />
                                </div>
                            </NavLink>
                        </li>

                        <li className={styles.li}>
                            <NavLink
                                exact
                                to="/"
                                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                            >
                                <Home className={styles.svglogo} alt="Home" />
                            </NavLink>
                        </li>

                        <li className={styles.li}>
                            <NavLink
                                exact
                                to="/contact-us"
                                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                            >
                                <About className={styles.svglogo} alt="About Us" />
                            </NavLink>
                        </li>

                        <li className={`${styles.li} ${styles.searchLi}`}>
                            <div className={styles.searchBox}>
                                <div className={styles.categoryDropdown}>
                                    <button
                                        className={styles.categoryButton}
                                        onClick={() => setIsCategoryDropdownVisible(!isCategoryDropdownVisible)}
                                    >
                                        {selectedCategory} ▼
                                    </button>
                                    {isCategoryDropdownVisible && (
                                        <ul className={styles.categoryDropdownList}>
                                            {categories.map((category, index) => (
                                                <li
                                                    key={index}
                                                    className={styles.categoryDropdownItem}
                                                    onClick={() => handleCategoryClick(category)}
                                                >
                                                    {category}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                {/* <SearchIcon className={styles.searchIcon} alt="Search Icon" /> */}
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    className={styles.searchInput}
                                />
                                {isDropdownVisible && (
                                    <ul className={styles.dropdown}>
                                        {filteredSuggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                className={styles.dropdownItem}
                                                onClick={() => handleSuggestionClick(suggestion)}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>

                        <li className={styles.li}>
                            <NavLink
                                exact
                                to="/blog"
                                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                            >
                                <Blog className={styles.svglogo} alt="Blog" />
                            </NavLink>
                        </li>

                        <li className={styles.li}>
                            <NavLink
                                exact
                                to="/sign-in"
                                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                            >
                                <Auth className={styles.svglogo} alt="Sign In" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


