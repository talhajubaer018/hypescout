import React from 'react'
import { useRef } from 'react'

const Header = () => {
  const hamburger = useRef(null)
  const navlist = useRef(null)

  const navToggle = () => {
    hamburger.current.classList.toggle('open')
    navlist.current.classList.toggle('open')
  }
	return (
		<header className='header-bg'>
			<div className='header container'>
				<div className='logo'>
					<img src='/logo.png' />
				</div>
				<nav className='navbar'>
          <div ref={navlist} className='navlist'>
            <h3 className='active'>Dashboard</h3>
            <h3>Camapign</h3>
            <h3>Hypersocial</h3>
            <h3>Insights</h3>
          </div>
					<button className='hamburger' ref={hamburger} onClick={navToggle} >
						<span className='hamburger-top'></span>
						<span className='hamburger-middle'></span>
						<span className='hamburger-bottom'></span>
					</button>
				</nav>
				<div className='profile'>
					<img src='/bell.png' />
					<img src='/moon.png' />
					<h4>
						<span>Hi,</span>
						<span className='username'>Rakib</span>
					</h4>
					<img src='/profile-icon.png' />
				</div>
			</div>
		</header>
	)
}
export default Header