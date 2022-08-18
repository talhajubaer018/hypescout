import React from 'react'

const Header = () => {
	return (
		<header className='header-bg'>
			<div className='header container'>
				<div className='logo'>
					<img src='/logo.png' />
				</div>
				<nav className='navbar'>
					<h3 className='active'>Dashboard</h3>
					<h3>Camapign</h3>
					<h3>Hypersocial</h3>
					<h3>Insights</h3>
				</nav>
				<div className='profile'>
					<img src='/bell.png' />
					<img src='/moon.png' />
					<h4>
            <span>Hi,</span>
            <span className='username'>Rakim</span>
          </h4>
					<img src='/profile-icon.png' />
				</div>
			</div>
		</header>
	)
}
export default Header