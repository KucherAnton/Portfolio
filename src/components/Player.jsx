import React, { useEffect, useRef, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import '../styles/player.css';
import { music } from '../constants';

const Player = () => {
	const musicRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [sliderVolume, setSliderVolume] = useState(0.5);

	useEffect(() => {
		const musicRefCurrent = musicRef.current;

		if (isPlaying) {
			const playPromise = musicRefCurrent.play();
			if (playPromise !== undefined) {
				playPromise
					.then(() => {
						musicRefCurrent.play();
					})
					.catch((error) => {
						console.log('Ошибка воспроизведения аудио:', error);
					});
			}
		} else {
			musicRefCurrent.pause();
		}
	}, [isPlaying, currentSongIndex]);

	useEffect(() => {
		const musicRefCurrent = musicRef.current;

		const handleSongEnd = () => {
			setCurrentSongIndex((prevIndex) => {
				let nextIndex = prevIndex + 1;
				return nextIndex < music.length ? nextIndex : prevIndex;
			});
		};

		musicRefCurrent.addEventListener('ended', handleSongEnd);

		return () => {
			musicRefCurrent.removeEventListener('ended', handleSongEnd);
		};
	}, [currentSongIndex]);

	const handleSliderChange = (event) => {
		const volume = event.target.value / 100;
		setSliderVolume(volume);
		musicRef.current.volume = volume;
	};

	const handlePrevSong = () => {
		setCurrentSongIndex((prevIndex) => {
			let nextIndex = prevIndex - 1;
			return nextIndex >= 0 ? nextIndex : prevIndex;
		});
	};

	const handleNextSong = () => {
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
							setIsPlaying(!isPlaying);
							setIsPlaying(isPlaying ? false : true);
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
			<audio ref={musicRef} src={`./music/${music[currentSongIndex]}.mp3`} />
		</div>
	);
};

export default Player;
