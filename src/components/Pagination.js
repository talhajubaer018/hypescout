import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Pagination = () => {
	return (
		<section className='pagination-section container'>
			<div className='previous-button'>
				<FaArrowLeft />
				<h3>Previous</h3>
			</div>
			<div className='pagination'>
				<h3 className='active'>1</h3>
				<h3>2</h3>
				<h3>3</h3>
				<h3>...</h3>
				<h3 className='p-8'>8</h3>
				<h3 className='p-9'>9</h3>
				<h3>10</h3>
			</div>
			<div className='next-button'>
				<h3>Next</h3>
				<FaArrowRight />
			</div>
		</section>
	)
}

export default Pagination
