import Header from '../components/Header'
import ProfileContent from '../components/ProfileContent'
import SearchCard from '../components/SearchCard'


import Pagination from '../components/Pagination'

export default function Home() {
	return (
		<div className='main'>
			<Header />
			<SearchCard />
			<ProfileContent />
			<Pagination />
		</div>
	)
}
