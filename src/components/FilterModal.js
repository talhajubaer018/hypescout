import React, { useState, useRef } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const FilterModal = ({ profileData }) => {
	const [sliderValue, setSliderValue] = useState(0)
	const [sliderStep, setSliderStep] = useState(0)

	const labelHandler = () => {
		if(sliderStep === 1){
			return "0"
		} else if(sliderStep === 2){
			return "25k"
		} else if(sliderStep === 3){
			return "50k"
		} else if(sliderStep === 4){
			return "100k"
		} else if(sliderStep === 5){
			return "250k"
		} else if(sliderStep === 6){
			return "500k"
		} else if(sliderStep === 7){
			return "1M"
		}
	}

	const sliderInputChange = (value) => {
		setSliderStep(value)
		console.log(sliderStep)
		if(value === 0){
			setSliderValue(0)
		} else if(value === 1){
			setSliderValue(25000)
		} else if(value === 2){
			setSliderValue(50000)
		} else if(value === 3){
			setSliderValue(100000)
		} else if(value === 4){
			setSliderValue(250000)
		} else if(value === 5){
			setSliderValue(500000)
		} else if(value === 6){
			setSliderValue(1000000)
		}
	}
	return (
		<div className='filter-modal'>
			<h2 className='filter-modal-header'>Filter Options</h2>
			<div className='filter-lists'>
				<div>
					<h3 className='filter-header'>Influncer's Industry</h3>
					<select placeholder='Select Option' name='category'>
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
					<select name='influencer country'>
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
					<select name='audience country'>
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
					<select name='platform'>
						<option value='' defaultValue=''>
							Select Options
						</option>
						<option value='facebook'>Facebook</option>
						<option value='instagram'>Instagram</option>
						<option value='linkedin'>Linkedin</option>
						<option value='twitter'>Twitter</option>
					</select>
				</div>
				<div>
				<h3 className='filter-header'>Influencer’s Social Media Followers</h3>
					<Slider min={1} max={7} value={sliderStep} onChange={sliderInputChange} format={labelHandler} step={1} labels={{ 1:'0', 2: '25k', 3: '50k', 4: '100k', 5: '250k', 6: '500k', 7: '1M' }} />
				</div>
				<div>Influencer’s Social Media Platform Slider</div>
				<div>Influencer’s Gender</div>
				<div>Buttons</div>
			</div>
		</div>
	)
}

export default FilterModal
