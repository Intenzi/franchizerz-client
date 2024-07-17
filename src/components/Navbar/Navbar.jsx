import Home from "../../assets/home.svg"
import BrandName from "../../assets/logo.svg"
import Logo from "../../assets/logo_1.svg"
import Auth from "../../assets/auth.svg"
import { NavLink } from "react-router-dom"
import About from "../../assets/AboutUs.svg"
import Blog from "../../assets/blog.svg"
import styles from "../NavBar/NavBar.module.css"
// import SearchBar from "../SearchBar/SearchBar";
import Search from "../../assets/search.svg"

export default function NavBar() {
	const activeLinkStyle = {
		fontWeight: "bold",
		color: "black",
		// backgroundColor: "#1a73e8",
		// padding: "1px",
		borderRadius: "1px",
	}
	return (
		<div>
			<nav className={styles.navigation}>
				<div>
					<ul className={styles.ul1}>
						<li className={styles.li}>
							<NavLink
								exact
								to="/"
								style={({ isActive }) =>
									isActive ? activeLinkStyle : undefined
								}
							>
								<div style={{ display: "flex" }}>
									<Logo className={styles.svglogo} />
									<BrandName
										className={styles.franchizerzlogo}
									/>
								</div>
							</NavLink>
						</li>

						<li className={styles.li}>
							<NavLink
								exact
								to="/"
								style={({ isActive }) =>
									isActive ? activeLinkStyle : undefined
								}
							>
								<Home className={styles.svglogo} />
							</NavLink>
						</li>

						<li className={styles.li}>
							<NavLink
								exact
								to="/franchise/1"
								style={({ isActive }) =>
									isActive ? activeLinkStyle : undefined
								}
							>
								<About className={styles.svglogo} />
							</NavLink>
						</li>

						<li className={styles.li}>
							<NavLink
								exact
								to="/"
								style={({ isActive }) =>
									isActive ? activeLinkStyle : undefined
								}
							>
								<Search className={styles.searchlogo} />
							</NavLink>
						</li>

						<li className={styles.li}>
							<NavLink
								exact
								to="/blog"
								style={({ isActive }) =>
									isActive ? activeLinkStyle : undefined
								}
							>
								<Blog className={styles.svglogo} />
							</NavLink>
						</li>

						<li className={styles.li}>
							<NavLink
								exact
								to="/sign-up"
								style={({ isActive }) =>
									isActive ? activeLinkStyle : undefined
								}
							>
								<Auth className={styles.svglogo} />
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}