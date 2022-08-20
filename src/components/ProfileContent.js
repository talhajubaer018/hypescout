import React, { useState } from 'react'
import profileData from '../../db/db.js'
import Socials from './Socials.js'

const ProfileContent = ({ keyword }) => {
	const [profiles, setProfiles] = useState([...profileData])

	return (
		<section className='profile-section container'>
			{profiles
				.filter((profile) => {
					if (keyword == '') {
						return profile
					} else if (profile.name.toLowerCase().includes(keyword.toLowerCase())) {
						return profile
					}
				})
				.map((data) => (
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
						<Socials />
						<div className='profile-info'>
							<h3>
								<span>{data.followers}</span>
								<br />
								Followers
							</h3>
							<h3>
								<span>{data.category}</span>
								<br />
								Categories
							</h3>
							<h3>
								<span>{data.gender}</span>
								<br />
								Gender
							</h3>
						</div>
					</div>
				))}
		</section>
	)
}
export default ProfileContent
