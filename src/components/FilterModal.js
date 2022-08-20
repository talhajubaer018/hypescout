import React from 'react'

const FilterModal = ({ profileData }) => {
	return (
		<div className='filter-modal'>
			<h2 className='filter-modal-header'>Filter Options</h2>
			<div className='filter-lists'>
				<div>
					<h3 className='filter-header'>Influncer's Industry</h3>
					<select placeholder='Select Option' name='category'>
						<option value='' selected>
							Select Options
						</option>
						{profileData.map((profile) => (
							<option value={profile.category}>{profile.category}</option>
						))}
					</select>
				</div>
				<div>
					<h3 className='filter-header'>Influncer's Country</h3>
					<select name='influencer country'>
						<option value='' selected>
							Select Options
						</option>
						{profileData.map((profile) => (
							<option>{profile.location}</option>
						))}
					</select>
				</div>
				<div>
					<h3 className='filter-header'>Audience's Country</h3>
					<select name='audience country'>
						<option value='' selected>
							Select Options
						</option>
						{profileData.map((profile) => (
							<option value={profile.category}>{profile.location}</option>
						))}
					</select>
				</div>
				<div>
					<h3 className='filter-header'>Influencer’s Social Media Platform</h3>
					<select name='platform'>
						<option value='' selected>
							Select Options
						</option>
						<option value='facebook'>Facebook</option>
						<option value='instagram'>Instagram</option>
						<option value='linkedin'>Linkedin</option>
						<option value='twitter'>Twitter</option>
					</select>
				</div>
				<div>Influencer’s Social Media Platform Slider</div>
				<div>Influencer’s Gender</div>
				<div>Buttons</div>
			</div>
		</div>
	)
}

export default FilterModal
