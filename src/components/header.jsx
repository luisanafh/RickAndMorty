import './Header.scss';
import { img } from '../assets/images';

const Header = () => {
	return (
		<header className="header">
			<img src={img} alt="" className="header__image" />
		</header>
	);
};

export default Header;
