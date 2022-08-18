import Header from '../components/Header'
import ProfileContent from '../components/ProfileContent'
import SearchCard from '../components/SearchCard'

export default function Home() {
	return (
		<div className='main'>
			<Header />
			<SearchCard />
			<ProfileContent />
		</div>
	)
}
