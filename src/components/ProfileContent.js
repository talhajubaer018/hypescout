import React from 'react'

const ProfileContent = () => {
	return (
		<section className='profile-section container'>
			<div className='profile-card'>
				<img src='/maksudul.png' alt='maksudul' />
				<h1 className='profile-name'>Maksudul Hasan</h1>
				<div className='location'>
					<img src='/map-icon.png' alt='map' />
					<h2>Dhaka Bangladesh</h2>
				</div>
				<div className='time'>
					<img src='/clock-icon.png' alt='clock' />
					<h2>Joined On: July 26th, 2022</h2>
				</div>
				<div className='social-icons'>
					<img src='/fb.png' alt='facebook' />
					<img src='/instagram.png' alt='instagram' />
					<img src='/linkedin.png' alt='linkedin' />
					<img src='/twitter.png' alt='twitter' />
				</div>
				<div className='profile-info'>
					<h3>
						<span>12k</span> <br /> Followers
					</h3>
					<h3>
						<span>Fashion</span> <br /> Categories
					</h3>
					<h3>
						<span>Male</span> <br /> Gender
					</h3>
				</div>
			</div>
		</section>
	)
}
export default ProfileContent
