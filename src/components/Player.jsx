import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import '../styles/player.css';
import { music } from '../constants';

const Player = ({ prevSong, playSong, nextSong, setVolume }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [sliderVolume, setSliderVolume] = useState(0.5);

	const switchImage = () => {
		setIsPlaying(isPlaying ? false : true);
	};

	const handleSliderChange = (event) => {
		const volume = event.target.value / 100;
		setSliderVolume(volume);
		setVolume(volume);
	};

	const handlePrevSong = () => {
		prevSong();
		setCurrentSongIndex((prevIndex) => {
			let nextIndex = prevIndex - 1;
			return nextIndex >= 0 ? nextIndex : prevIndex;
		});
	};

	const handleNextSong = () => {
		nextSong();
		setCurrentSongIndex((prevIndex) => {
			let nextIndex = prevIndex + 1;
			return nextIndex < music.length ? nextIndex : prevIndex;
		});
	};

	return (
		<div id="player">
			<div className="player-cont">
				<ButtonGroup className="player-group">
					<Button
						className="player-button"
						variant="secondary"
						onClick={handlePrevSong}>
						<img src="./assets/prev.png" alt="Oops, error!" />
					</Button>
					<Button
						className="player-button"
						variant="secondary"
						onClick={() => {
							playSong();
							switchImage();
						}}>
						<img
							src={isPlaying ? './assets/pause.png' : './assets/resume.png'}
							alt="Oops, error!"
						/>
					</Button>
					<Button
						className="player-button"
						variant="secondary"
						onClick={handleNextSong}>
						<img src="./assets/next.png" alt="Oops, error!" />
					</Button>
				</ButtonGroup>
				<div className="slider-cont">
					<div className="slider">
						<input
							type="range"
							min="0"
							max="100"
							value={sliderVolume * 100}
							onChange={handleSliderChange}
						/>
					</div>
				</div>
				<div className="current-song">
					<div className="current-song-animation">
						<div className="current-song-content">
							{music[currentSongIndex]}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
