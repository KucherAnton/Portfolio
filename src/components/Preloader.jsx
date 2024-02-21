import React, { useEffect, useState } from 'react';
import '../styles/preloader.css';
import { music } from '../constants';

const Preloader = () => {
	const [loadingPercents, setLoadingPercents] = useState(0);

	useEffect(() => {
		const mediaFiles = document.querySelectorAll('img');
		const audioFiles = music.map((fileName) => `./music/${fileName}.mp3`);
		const allFiles = [...mediaFiles, ...audioFiles];

		// const image = new Image();
		// image.src = './assets/pause.png';

		let loadedFiles = 0;

		const updatePercents = () => {
			const percent = Math.round((loadedFiles / allFiles.length) * 100);
			setLoadingPercents(percent);
		};

		const handleLoad = () => {
			loadedFiles++;
			updatePercents();

			if (loadedFiles === allFiles.length) {
				document.getElementById('preloader').classList.add('preloader--hide');
			}
		};

		allFiles.forEach((file) => {
			const element = new Image();
			element.src = file;

			element.addEventListener('load', handleLoad);
			element.addEventListener('error', handleLoad);
		});

		return () => {
			allFiles.forEach((file) => {
				const element = new Image();
				element.src = file;

				element.removeEventListener('load', handleLoad);
				element.removeEventListener('error', handleLoad);
			});
		};
	}, []);

	return (
		<div id="preloader">
			<div className="preloader-loader">
				<div className="loader">
					<div className="loader-circles">
						<div></div>
						<div></div>
					</div>
				</div>
				<span className="preloader-percents">
					<span>{loadingPercents}</span>%
				</span>
			</div>
		</div>
	);
};

export default Preloader;
