import React, { useEffect } from 'react';
import './Br.scss';

const Br = () => {
	useEffect(() => {
		const createStar = () => {
			const star = document.createElement('div');
			star.className = 'star';
			star.style.top = `${Math.random() * 90}vh`;
			star.style.left = `${Math.random() * 90}vw`;
			star.style.animationDuration = `${Math.random() * 30 + 10}s`;
			document.querySelector('.animated-background').appendChild(star);
		};

		for (let i = 0; i < 50; i++) {
			createStar();
		}
	}, []);

	return <div className="animated-background"></div>;
};

export default Br;
