import { useState } from 'react'

import Header from '../components/Header'
import SearchCard from '../components/SearchCard'
import ProfileContent from '../components/ProfileContent'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

export default function Home() {
	const [keyword, setKeyword] = useState('')

	const search = (key) => {
		setKeyword(key)
	}

	return (
		<div className='main'>
			<Header />
			<SearchCard search={search} />
			<ProfileContent keyword={keyword} />
			<Pagination />
			<Footer />
		</div>
	)
}
