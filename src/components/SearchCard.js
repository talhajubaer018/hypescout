import React, { useRef, useEffect } from 'react'

import { profileData } from '../../db/db.js'
import FilterModal from './FilterModal.js'

const SearchCard = ({ search }) => {
	const modal = useRef(null)
	const modalBg = useRef(null)

	const modalOpen = () => {
		modal.current.classList.toggle('show')
		modalBg.current.classList.toggle('show')
	}
	const modalClose = () => {
		modalBg.current.classList.remove('show')
	}

	useEffect(() => {

    const handleClick = (e) => {
      if (modal.current && !modal.current.contains(e.target) && modalBg.current && modalBg.current.contains(e.target))  {
        modal.current.classList.remove('show')
        modalBg.current.classList.remove('show')
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

	return (
		<section className='search-card-bg'>
			<div className='search-card container'>
				<h1 className='card-header'>Profile({profileData.length})</h1>
				<div className='searchbox'>
					<input type='text' placeholder='Search Profile' onChange={(e) => search(e.target.value)} />
					<div className='search-icon'>
						<img src='/search.png' alt='search' />
					</div>
				</div>
				<div ref={modalBg} className='modal-bg'></div>
				<div className='filter-button' onClick={modalOpen}>
					<img src='/filter-icon.png' alt='filter' />
					<div>
						<h3>Advanced Filter</h3>
					</div>
				</div>
				<div ref={modal} className='modal-container'>
					<FilterModal profileData={profileData} />
				</div>
			</div>
		</section>
	)
}
export default SearchCard
