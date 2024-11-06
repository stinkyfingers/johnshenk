import React from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../../api';
import ImageViewer from 'react-simple-image-viewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faHome } from '@fortawesome/free-solid-svg-icons'
import styles from '../../css/guitar.module.css';

const Guitar = () => {
	const { name } = useParams();
	const [isOpen, setIsOpen] = React.useState(false);
	const guitar = config.find((guitar) => guitar.name === name);
	if (!guitar) return null;
	return (
		<div className={styles.guitar}>
			<div className={styles.header}>
				<FontAwesomeIcon icon={faHome} onClick={() => window.history.back()} className={styles.backIcon} />
			</div>
			<h1>{guitar.name}</h1>
			<img src={guitar.mainImage} alt={guitar.name} className={styles.thumbnail}/>
			<div>
				<FontAwesomeIcon
					icon={faCamera}
					onClick={() => setIsOpen(true)}
					className={styles.cameraIcon}
				/>
			</div>
			<p>{guitar.text}</p>
			{ isOpen ? (
				<ImageViewer
					src={guitar.images}
					currentIndex={0}
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
				/>
			) : null }
		</div>
	);
};

export default Guitar;
