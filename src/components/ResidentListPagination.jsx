import usePagination from '../hooks/usePagination';
import Pagination from './pagination';
import ResidentsList from './ResidentsList';

function ResidentsListPagination({ pending, residents }) {
	const { page, totalPages, pageItems, onPrev, onNext, itemsPerPage } =
		usePagination({ itemsPerPage: 12, items: residents });

	return (
		<div>
			<ResidentsList
				pending={pending}
				residents={residents}
				pageItems={pageItems}
			/>
			{itemsPerPage < residents?.length && (
				<Pagination
					page={page}
					totalPages={totalPages}
					onPrev={onPrev}
					onNext={onNext}
				/>
			)}
		</div>
	);
}
export default ResidentsListPagination;
