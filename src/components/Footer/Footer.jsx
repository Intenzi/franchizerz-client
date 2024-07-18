import s from "./Footer.module.css"
import FacebookLogo from "../../images/icons8-facebook.svg"
import InstagramLogo from "../../images/icons8-instagram.svg"
import LinkedinLogo from "../../images/icons8-linkedin.svg"
import TwitterLogo from "../../images/icons8-x-logo.svg"
const Footer = () => {
	return (
		<div className={s.mainFooterContainer}>
			<div className={s.subFooterContainer}>
				<div>
					<p className={s.footHeadText}>Franchizerz</p>
				</div>
				<div>
					<div>
						<p className={s.newsletterText}>
							Subscribe to our newsletter for latest updates on
							new features and product releases
						</p>
					</div>
					<div className={s.inputContainer}>
						<div>
							<input
								className={s.input}
								type="email"
								placeholder="Enter your email"
							/>
						</div>
						<div>
							<button className={s.submit}>
								Subscribe to Newsletter
							</button>
						</div>
					</div>
					<div>
						<p className={s.newslettersubText}>
							Get in touch with us for more information on our
							franchize models
						</p>
					</div>
					<div className={s.socialContainer}>
						<p className={s.socialText}>Follow Us: </p>
						<div className={s.socialLogo}>
							<a className={s.logolink} href="googl.in">
								<FacebookLogo className={s.logo} />
							</a>
							<a className={s.logolink} href="googl.in">
								<InstagramLogo className={s.logo} />
							</a>
							<a className={s.logolink} href="googl.in">
								<LinkedinLogo className={s.logo} />
							</a>
							<a className={s.logolink} href="googl.in">
								<TwitterLogo className={s.logo} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={s.subFooterContainer}>
				<div>
					<p className={s.footHeadText}>Franchize Models</p>
				</div>
				<div>
					<div>
						<a href="sample.com">Express Package</a>
					</div>
					<div>
						<a href="sample.com">Classic Package</a>
					</div>
					<div>
						<a href="sample.com">Platinum Package</a>
					</div>
					<div>
						<a href="sample.com">About Us</a>
					</div>
					<div>
						<a href="sample.com">FAQs</a>
					</div>
				</div>
			</div>
			<div className={s.subFooterContainer}>
				<div>
					<p className={s.footHeadText}>Contact Us</p>
				</div>
				<div>
					<div>
						<a href="sample.com">Terms & Conditions</a>
					</div>
					<div>
						<a href="sample.com">Privacy Policy</a>
					</div>
					<div>
						<a href="sample.com">Cookie Policy</a>
					</div>
					<div>
						<a href="sample.com">Careers</a>
					</div>
					<div>
						<a href="sample.com">Blog</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
