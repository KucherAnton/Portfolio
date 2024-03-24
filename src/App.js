// import Preloader from './components/Preloader';
// import Visualizer from './components/Visualizer';
import Portfolio from './components/Portfolio';
import Player from './components/Player';
import { useEffect } from 'react';
import { images } from './constants';

function App() {
	const isMobile = window.innerWidth <= 1115;

	useEffect(() => {
		images.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
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
