import { useEffect } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import './ResidentCard.scss';
function ResidentCard({ url }) {
	const { data: resident, request, pending, error } = useFetchApi();
	useEffect(() => {
		request(url);
	}, [url]);
	const status = {
		Alive: '🟢',
		Dead: '🔴',
		unknown: '⚫',
	};
	const episodesCount = resident?.episode?.length;
	const countText = episodesCount === 1 ? 'episode' : 'episodes';

	return (
		<div className="resident">
			{pending ? (
				<p>Cargando...</p>
			) : (
				<>
					<div className="resident__header">
						<img
							src={resident?.image}
							alt={resident?.name}
							className="resident__img"
						/>
						<span className="resident__status">
							{status[resident?.status]} {resident?.status}
						</span>
					</div>
					<div className="resident__body">
						<h3 className="resident__name">{resident?.name}</h3>
						<ul className="resident__details">
							<li className="resident__details-item">
								Specie:{' '}
								<span className="resident__details-span">
									{resident?.species}
								</span>
							</li>
							<li className="resident__details-item">
								Origin:{' '}
								<span className="resident__details-span">
									{resident?.origin?.name}
								</span>
							</li>
							<li className="resident__details-item">
								Episodes where appear:
								<span className="resident__details-span">
									{episodesCount} {countText}
								</span>
							</li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
}
export default ResidentCard;
