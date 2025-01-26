import './Pagination.scss';
function Pagination({ page, totalPages, onPrev, onNext }) {
	return (
		<div className="pagination">
			<button
				className="pagination__btn"
				onClick={onPrev}
				disabled={page === 1}
			>
				Prev
			</button>
			<span className="pagination__span">
				{' '}
				{page} of {totalPages}{' '}
			</span>
			<button
				className="pagination__btn"
				onClick={onNext}
				disabled={page === totalPages}
			>
				Next
			</button>
		</div>
	);
}
export default Pagination;
