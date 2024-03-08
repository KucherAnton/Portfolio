// import Preloader from './components/Preloader';
// import Visualizer from './components/Visualizer';
import Portfolio from './components/Portfolio';
import Player from './components/Player';

function App() {
	const isMobile = window.innerWidth <= 600;

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
	Refactoring
	Adaptation
*/
