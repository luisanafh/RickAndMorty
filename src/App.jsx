import { useEffect, useState } from 'react';
import LocationCard from './components/LocationCard';
import useFetchApi from './hooks/UsefechtApi';
import SearchForm from './components/SearchForm';
import { randomId } from './utils';
import ResidentsListPagination from './components/ResidentListPagination';
import Br from './components/Br';
import Footer from './components/Footer';
import Header from './components/header';

const baseUrl = 'https://rickandmortyapi.com/api';
function App() {
	const { data, request, pending, error } = useFetchApi();
	const [search, setSearch] = useState(randomId(126));
	useEffect(() => {
		request(`${baseUrl}/location/${search}`);
		console.log(data);
	}, [search]);
	return (
		<div>
			<Header />
			<Br />
			<SearchForm setSearch={setSearch} />
			{pending ? <p>Cargando...</p> : data && <LocationCard location={data} />}
			<ResidentsListPagination pending={pending} residents={data?.residents} />
			<Footer />
		</div>
	);
}

export default App;
