import React from 'react'
import Socials from './Socials'

const Footer = () => {
	return (
		<footer className='footer-bg'>
			<div className='footer container'>
				<div className='footer-info'>
					<img className='footer-logo' src='/logo.png' alt='logo' />
					<p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum sed ultricies volutpat rhoncus faucibus sit. </p>
					<Socials />
				</div>
				<div className='footer-company'>
          <div>
            <h2>Company</h2>
            <h3>About Us</h3>
            <h3>Careers</h3>
            <h3>Case Study</h3>
            <h3>Blog</h3>
            <h3>Contact Us</h3>
          </div>
					<div>
						<div className='influencer-mobile'>
							<h2>Influencer</h2>
							<h3>Join as Influencer</h3>
							<h3>HypeSocial</h3>
						</div>
						<div className='advertise-mobile'>
							<h2>Advertiser</h2>
							<h3>Join as Advertiser</h3>
							<h3>Hypelink</h3>
						</div>
					</div>
				</div>
				<div className='influencer'>
					<h2>Influencer</h2>
					<h3>Join as Influencer</h3>
					<h3>HypeSocial</h3>
				</div>
				<div className='advertise'>
					<h2>Advertiser</h2>
					<h3>Join as Advertiser</h3>
					<h3>Hypelink</h3>
				</div>
			</div>
			<div className='copyright container'>
				<h3>© Hypescout 2022. All rights reserved</h3>
				<div className='terms'>
					<h3>Terms & Conditions</h3>
					<h3>Privacy</h3>
					<h3>Sitemap</h3>
				</div>
			</div>
		</footer>
	)
}

export default Footer
