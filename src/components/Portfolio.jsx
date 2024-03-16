import React, { useState } from 'react';
import NavBarComp from './NavBarComp';
import PersonInfo from './PersonInfo';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import '../styles/portfolio.css';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
	const isMobile = window.innerWidth <= 768;
	const [currentContent, setCurrentContent] = useState('about');

	const renderContent = () => {
		switch (currentContent) {
			case 'about':
				return <About />;
			case 'resume':
				return <Resume />;
			case 'contact':
				return <Contact />;
			default:
				return <About />;
		}
	};

	const handleContentChange = (content) => {
		setCurrentContent(content);
	};

	return (
		<div id="wrapper">
			<div id="background"></div>
			<div className="main-block">
				{isMobile && (
					<NavBarComp
						handleContentChange={handleContentChange}
						currentContent={currentContent}
					/>
				)}
				<PersonInfo currentContent={currentContent} />
				<div className="main-separator-div">
					<div className="main-separator"></div>
				</div>
				<div className="main-block-info">
					<div className="main-title">
						<p className="main-title-p">
							{currentContent === 'about'
								? 'Обо мне'
								: currentContent === 'resume'
								? 'Резюме'
								: 'Связаться'}
						</p>
					</div>
					<div className="info-separator"></div>
					{!isMobile && (
						<NavBarComp
							handleContentChange={handleContentChange}
							currentContent={currentContent}
						/>
					)}

					<AnimatePresence mode="sync">
						<motion.div
							className="render-content"
							key={currentContent}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}>
							{renderContent()}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
