import React from 'react'

const SearchCard = () => {
  return (
    <section className='search-card-bg'>
				<div className='search-card container'>
					<h1 className='card-header'>Profile(100)</h1>
					<div className='searchbox'>
						<input type='text' placeholder='Search Profile' />
						<div className='search-icon'>
							<img src='/search.png' alt='search' />
						</div>
					</div>
					<button className='filter-button'>
						<img src='/filter-icon.png' alt='filter' />
						<h3>Advanced Filter</h3>
					</button>
				</div>
			</section>
  )
}
export default SearchCard