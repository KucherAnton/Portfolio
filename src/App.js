// import Preloader from './components/Preloader';
// import Visualizer from './components/Visualizer';
import Portfolio from './components/Portfolio';
import Player from './components/Player';
import { useEffect } from 'react';
import { images } from './constants';
import Hammer from 'hammerjs';

function App() {
	const isMobile = window.innerWidth <= 1115;

	useEffect(() => {
		images.forEach((src) => {
			const img = new Image();
			img.src = src;
			console.log(img);
		});
	}, []);

	useEffect(() => {
		const hammer = new Hammer(document.body);
		hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

		hammer.on('swipedown', () => {
			window.location.reload();
		});

		return () => {
			hammer.destroy();
		};
	}, []);

	return (
		<>
			<div className="App">
				{/* <Preloader /> */}
				{/* <Visualizer /> */}
				<Portfolio />
				{!isMobile && <Player />}
			</div>
		</>
	);
}

export default App;

/* 
	Scoll on mobile
*/
