import { useRef, useState } from 'react';
import './SearchForm.scss';
function SearchForm({ setSearch }) {
	const inputRef = useRef();
	const [error, setError] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const value = inputRef.current.value.trim();
		if (!value) {
			setError('Please enter a location id');
			return;
			inputRef.current.value = '';
		}
		if (isNaN(+value) || +value < 1) {
			setError('Please enter a valid number');
			inputRef.current.value = '';
			return;
		}
		if (+value > 126) {
			setError('you must provide a number between 1 and 126');
			inputRef.current.value = '';
			return;
		}
		setSearch(value);
		inputRef.current.value = '';
	};

	return (
		<form className="search" onSubmit={handleSubmit}>
			<div className="container">
				<input
					className="search__input"
					type="text"
					ref={inputRef}
					placeholder="Enter a location id"
				/>
				<button className="search__btn">Search</button>
				{error && <p className="search__error">{error}</p>}
			</div>
		</form>
	);
}
export default SearchForm;
