import React from 'react';
import { config } from '../../api';
import styles from '../../css/guitars.module.css';
import { useNavigate } from 'react-router-dom';

const categories = [{
	title: 'Guitars',
	key: 'guitar',
}, {
	title: 'Basses',
	key: 'bass',
}, {
	title: 'Acoustics',
	key: 'acoustic',
}, {
	title: 'Amps',
	key: 'amp',
}];

const Category = ({ category, equipment }) => {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		setData(
			equipment.filter((guitar) => guitar.type === category.key)
				.sort((a, b) => a.sort < b.sort ? -1 : 1)
		);
	}, [equipment, category]);
	const navigate = useNavigate();
	const handleClick = (name) => {
		navigate(`/guitars/${name}`);
	};

	return (
		<div>
			<h1>{category.title}</h1>
			<div className={styles.cards}>
				{data.map((guitar) => (
					<div
						className={styles.card}
						key={guitar.name}
						onClick={() => handleClick(guitar.name)}
					>
						<h2>{guitar.name}</h2>
						<h6>{guitar.custom ? 'Custom' : 'Mostly Stock'}</h6>
						<img src={guitar.mainImage} alt={guitar.name} className={styles.thumbnail}/>
					</div>
				))
				}
			</div>
		</div>
	)
}

const Guitars = () => {
	const [equipment, setEquipment] = React.useState([]);
	React.useEffect(() => {
		config().then((data) => setEquipment(data));
	}, []);
	return (
		<div className={styles.guitars}>
			{categories.map((category) => (
				<Category key={category.key} category={category} equipment={equipment} />
			))}
		</div>
	);
}

export default Guitars;
