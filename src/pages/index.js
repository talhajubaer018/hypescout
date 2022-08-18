import Header from '../components/Header'
import SearchCard from '../components/SearchCard'
import ProfileContent from '../components/ProfileContent'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<div className='main'>
			<Header />
			<SearchCard />
			<ProfileContent />
			<Pagination />
			<Footer />
		</div>
	)
}
