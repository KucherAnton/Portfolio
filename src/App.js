// import Preloader from './components/Preloader';
// import Visualizer from './components/Visualizer';
import Portfolio from './components/Portfolio';
import Player from './components/Player';

function App() {
	const isMobile = window.innerWidth <= 1115;

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
	Find photo
	Add project5 photo after finding photo
	Adaptation
	Refactor adaptation
	Scoll on mobile

	для смартфонов — 320 px, 480 px и выше;
	для планшетов — 768 px и выше;
	для нетбуков — 1024 px и выше;
	для мониторов — 1280 px, 1600 px, 1920 px и выше.
*/
