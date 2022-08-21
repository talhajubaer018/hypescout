import React, { useState, useRef } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const FilterModal = ({ profileData }) => {
	const [sliderValue, setSliderValue] = useState(0)
	const [sliderStep, setSliderStep] = useState(0)

	const [industry, setIndustry] = useState('')
	const [influencerCountry, setInfluencerCountry] = useState('')
	const [audienceCountry, setAudienceCountry] = useState('')
	const [socialMedia, setSocialMedia] = useState('')
	const [followers, setFollowers] = useState('')
	const [gender, setGender] = useState('')

	const labelHandler = () => {
		if (sliderStep === 1) {
			return '0'
		} else if (sliderStep === 2) {
			return '25k'
		} else if (sliderStep === 3) {
			return '50k'
		} else if (sliderStep === 4) {
			return '100k'
		} else if (sliderStep === 5) {
			return '250k'
		} else if (sliderStep === 6) {
			return '500k'
		} else if (sliderStep === 7) {
			return '1M'
		}
	}

	const sliderInputChange = (value) => {
		setSliderStep(value)
		if (value === 0) {
			setSliderValue(0)
		} else if (value === 1) {
			setSliderValue(25000)
			setFollowers(0)
		} else if (value === 2) {
			setSliderValue(50000)
			setFollowers(25000)
		} else if (value === 3) {
			setSliderValue(100000)
			setFollowers(50000)
		} else if (value === 4) {
			setSliderValue(250000)
			setFollowers(100000)
		} else if (value === 5) {
			setSliderValue(500000)
			setFollowers(250000)
		} else if (value === 6) {
			setSliderValue(1000000)
			setFollowers(500000)
		} else if (value === 7) {
			setFollowers(1000000)
		}
	}

	const resetFilter = (e) => {
		e.preventDefault()
		setIndustry('')
		setInfluencerCountry('')
		setAudienceCountry('')
		setSocialMedia('')
		setFollowers(0)
		setGender('')
	}
	const applyFilter = (e) => {
		e.preventDefault()
		console.log('apply')
		{console.log(industry, influencerCountry , audienceCountry, socialMedia, followers, gender)}
	}

	return (
		<form className='filter-modal'>
			<h2 className='filter-modal-header'>Filter Options</h2>
			<div className='filter-lists'>
				<div>
					<h3 className='filter-header'>Influncer's Industry</h3>
					<select name='category' value={industry} onChange={e => setIndustry(e.target.value)}>
						<option value='' defaultValue=''>
							Select Options
						</option>
						{profileData.map((profile) => (
							<option key={profile.id} value={profile.category}>
								{profile.category}
							</option>
						))}
					</select>
				</div>
				<div>
					<h3 className='filter-header'>Influncer's Country</h3>
					<select name='influencer country' value={influencerCountry} onChange={e => setInfluencerCountry(e.target.value)}>
						<option value='' defaultValue=''>
							Select Options
						</option>
						{profileData.map((profile) => (
							<option key={profile.id}>{profile.location}</option>
						))}
					</select>
				</div>
				<div>
					<h3 className='filter-header'>Audience's Country</h3>
					<select name='audience country' value={audienceCountry} onChange={e => setAudienceCountry(e.target.value)}>
						<option value='' defaultValue=''>
							Select Options
						</option>
						{profileData.map((profile) => (
							<option key={profile.id} value={profile.category}>
								{profile.location}
							</option>
						))}
					</select>
				</div>
				<div>
					<h3 className='filter-header'>Influencer’s Social Media Platform</h3>
					<select name='platform' value={socialMedia} onChange={e => setSocialMedia(e.target.value)}>
						<option value='' defaultValue=''>
							Select Options
						</option>
						<option value='Facebook'>Facebook</option>
						<option value='Instagram'>Instagram</option>
						<option value='Linkedin'>Linkedin</option>
						<option value='Twitter'>Twitter</option>
					</select>
				</div>
				<div>
					<h3 className='filter-header'>Influencer’s Social Media Followers</h3>
					<Slider min={1} max={7} value={sliderStep} onChange={sliderInputChange} format={labelHandler} step={1} labels={{ 1: '0', 2: '25k', 3: '50k', 4: '100k', 5: '250k', 6: '500k', 7: '1M' }} />
				</div>
				<div>
					<h3 className='filter-header'>Influencer’s Gender</h3>
					<div className='radio-buttons'>
						<div className='male-radio'>
							<input type='radio' id='male' name='gender' value='male' onChange={(e)=> setGender(e.target.value)}></input>
							<label htmlFor='male'>Male</label>
						</div>
						<div className='female-radio'>
							<input type='radio' id='female' name='gender' value='female' onChange={(e)=> setGender(e.target.value)}></input>
							<label htmlFor='female'>Female</label>
						</div>
					</div>
					<div className='filter-buttons'>
						<div>
							<button className='reset-button' onClick={resetFilter}>Reset</button>
						</div>
						<div>
							<button className='apply-button' onClick={applyFilter}>Apply</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default FilterModal
