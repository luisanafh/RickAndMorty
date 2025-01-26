import ResidentCard from './ResidentCard';
import './ResidentsList.scss';

function ResidentsList({ pending, pageItems }) {
	return (
		<div className="residents container">
			{pending ? (
				<p className="residents__item">Cargando...</p>
			) : pageItems.length > 0 ? (
				<>
					{pageItems.map((resident) => (
						<ResidentCard key={resident} url={resident} />
					))}
				</>
			) : (
				<p className="residents__item">No hay residentes</p>
			)}
		</div>
	);
}
export default ResidentsList;
