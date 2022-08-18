import React from 'react'
import profileData from '../../db/db.js'

const ProfileContent = () => {
	return (
		<section className='profile-section container'>
			{profileData.map((data) => (
				<div className='profile-card' key={data.id}>
					<img src={data.image} alt='maksudul' />
					<h1 className='profile-name'>{data.name}</h1>
					<div className='location'>
						<img src='/map-icon.png' alt='map' />
						<h2>{data.location}</h2>
					</div>
					<div className='time'>
						<img src='/clock-icon.png' alt='clock' />
						<h2>Joined On: {data.joinDate}</h2>
					</div>
					<div className='social-icons'>
						<img src='/fb.png' alt='facebook' />
						<img src='/instagram.png' alt='instagram' />
						<img src='/linkedin.png' alt='linkedin' />
						<img src='/twitter.png' alt='twitter' />
					</div>
					<div className='profile-info'>
						<h3>
							<span>{data.followers}</span><br />Followers
						</h3>
						<h3>
							<span>{data.category}</span><br />Categories
						</h3>
						<h3>
							<span>{data.gender}</span><br />Gender
						</h3>
					</div>
				</div>
			))}
		</section>
	)
}
export default ProfileContent
