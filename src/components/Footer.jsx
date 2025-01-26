import './Footer.scss';
import { gif } from '../assets/images';

const Footer = () => {
	return (
		<footer className="footer ">
			<div className="footer__content container">
				<img className="gif" src={gif} alt="rick and morty portal" />
				<div className="title">
					Rick <span className="title__span">and</span> Morty
				</div>
			</div>
		</footer>
	);
};

export default Footer;
