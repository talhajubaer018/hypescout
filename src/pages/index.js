import Header from '../components/Header'
import ProfileContent from '../components/ProfileContent'
import SearchCard from '../components/SearchCard'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Home() {
	return (
		<div className='main'>
			<Header />
			<SearchCard />
			<ProfileContent />
			<section className='pagination-section container'>
				<div className='previous-button'>
					<FaArrowLeft/>
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
					<FaArrowRight/>
				</div>
			</section>
		</div>
	)
}
