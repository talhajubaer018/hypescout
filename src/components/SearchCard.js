import React, { useRef } from 'react'

import { profileData } from '../../db/db.js'
import FilterModal from './FilterModal.js'

const SearchCard = ({ search }) => {
	const modal = useRef(null)

	const modalOpen = () => {
		modal.current.classList.toggle('show')
	}
	const modalClose = () => {
		modal.current.classList.remove('show')
	}
	return (
		<section className='search-card-bg'>
			<div className='search-card container'>
				<h1 className='card-header'>Profile(6)</h1>
				<div className='searchbox'>
					<input type='text' placeholder='Search Profile' onChange={(e) => search(e.target.value)} />
					<div className='search-icon'>
						<img src='/search.png' alt='search' />
					</div>
				</div>
				<div className='modal-bg'></div>
				<div className='filter-button' onClick={modalOpen}>
					<img src='/filter-icon.png' alt='filter' />
					<div>
						<h3>Advanced Filter</h3>
					</div>
					<div ref={modal} className='modal-container'>
						<FilterModal profileData={profileData} />
					</div>
				</div>
			</div>
		</section>
	)
}
export default SearchCard
