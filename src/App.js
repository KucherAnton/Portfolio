import Visualizer from './components/Visualizer';
import Portfolio from './components/Portfolio';
import Preloader from './components/Preloader';

function App() {
	return (
		<>
			<div className="App">
				<Preloader />
				<Visualizer />
				<Portfolio />
			</div>
		</>
	);
}

export default App;

/* 
	Volume bug
	Preloader Pause and others bug
*/
