import React from 'react';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import { music } from '../constants';
import '../styles/visualizer.css';
import Player from './Player';

const Music = () => {
	let songs = [];
	let index = 0;
	let currentSong;
	let fft;
	let particles = [];
	let img;
	let counter = 0;
	let interval = 5;

	const setup = (p5, canvasParentRef) => {
		for (let i = 0; i < music.length; i++) {
			songs[i] = p5.loadSound(`./music/${music[i]}.mp3`);
		}
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(
			canvasParentRef
		);
		p5.angleMode(p5.DEGREES);
		p5.imageMode(p5.CENTER);
		p5.rectMode(p5.CENTER);
		img = p5.loadImage('./assets/bg.png');

		fft = new window.p5.FFT(0.9);
	};

	const draw = (p5) => {
		p5.background(0);

		p5.translate(p5.width / 2, p5.height / 2);

		fft.analyze();
		let amp = fft.getEnergy(150, 250);

		p5.push();

		p5.image(img, 0, 0, p5.width + 50, p5.height + 50);
		p5.pop();

		let alpha = p5.map(amp, 0, 255, 180, 150);
		p5.fill(0, alpha);
		p5.noStroke();
		p5.rect(0, 0, p5.width, p5.height);

		p5.stroke(255);
		p5.strokeWeight(5);
		p5.noFill();

		let wave = fft.waveform();

		for (let t = -1; t < 2; t += 2) {
			p5.beginShape();

			for (let i = 0; i <= 180; i += 2) {
				let index = p5.floor(p5.map(i, 0, 180, 0, wave.length - 1));

				let r = p5.map(wave[index], -8, 8, 100, 350);
				let x = r * p5.sin(i) * t;
				let y = r * p5.cos(i);
				p5.vertex(x, y);
			}

			p5.endShape();
		}

		counter++;

		if (counter >= interval) {
			let particle = new Particle(p5);
			particles.push(particle);

			counter = 0;
		}

		for (let i = particles.length - 1; i >= 0; i--) {
			if (!particles[i].edges()) {
				particles[i].update(amp > 225);
				particles[i].show();
			} else {
				particles.splice(i, 1);
			}
		}
	};

	const prevSong = () => {
		if (currentSong && currentSong.isPlaying()) {
			if (index > 0) {
				currentSong.stop();
				currentSong = songs[index - 1];
				currentSong.play();
				index = (index - 1) % songs.length;
			} else {
				currentSong.stop();
				currentSong.play();
			}
		} else if (index > 0) {
			currentSong = songs[index - 1];
			index = (index - 1) % songs.length;
		} else {
			currentSong = songs[0];
			index = 0;
		}
	};

	const playSong = () => {
		if (currentSong && currentSong.isPlaying()) {
			currentSong.stop();
		} else {
			currentSong = songs[index];
			currentSong.play();
		}
	};

	const nextSong = () => {
		if (currentSong && currentSong.isPlaying()) {
			if (index < 9) {
				currentSong.stop();
				currentSong = songs[index + 1];
				currentSong.play();
				index = (index + 1) % songs.length;
			} else {
				currentSong.stop();
				currentSong.play();
			}
		} else if (index < 9) {
			currentSong = songs[index + 1];
			index = (index + 1) % songs.length;
		} else {
			currentSong = songs[9];
			index = 9;
		}
	};

	const setVolume = (vol) => {
		if (currentSong) {
			currentSong.setVolume(vol);
		}
	};

	class Particle {
		constructor(p5) {
			this.p5 = p5;
			this.pos = p5.createVector(
				p5.random(-p5.width / 8, p5.width / 8),
				p5.random(-p5.height / 8, p5.height / 8)
			);
			this.vel = p5.createVector(0, 0);
			this.acc = this.pos.copy().mult(p5.random(0.0001, 0.00001));
			this.w = p5.random(3, 5);
			this.color = [
				p5.random(200, 255),
				p5.random(200, 255),
				p5.random(200, 255),
			];
		}

		update(cond) {
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.pos.add(this.vel);
			if (cond) {
				this.pos.add(this.vel);
				this.pos.add(this.vel);
				this.pos.add(this.vel);
			}
		}

		edges() {
			if (
				this.pos.x < -this.p5.width / 2 ||
				this.pos.x > this.p5.width / 2 ||
				this.pos.y < -this.p5.height / 2 ||
				this.pos.y > this.p5.height / 2
			) {
				return true;
			} else return false;
		}

		show() {
			this.p5.noStroke();
			this.p5.fill(this.color);
			this.p5.ellipse(this.pos.x, this.pos.y, this.w);
		}
	}

	return (
		<div>
			<Player
				prevSong={prevSong}
				playSong={playSong}
				nextSong={nextSong}
				setVolume={setVolume}
			/>
			<Sketch id="visualizer" setup={setup} draw={draw} />
		</div>
	);
};

export default Music;
