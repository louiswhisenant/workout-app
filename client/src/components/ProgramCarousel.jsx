import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Carousel, Card, Container } from 'react-bootstrap';

const ProgramCarousel = () => {
	const [index, setIndex] = useState(0);
	const { macrocycle } = useSelector((state) => state.appData);
	const { mesocycles } = useSelector((state) => state.appData);
	// const { microcycles } = useSelector((state) => state.appData);
	// const { workouts } = useSelector((state) => state.appData);
	// const { exercises } = useSelector((state) => state.appData);

	const { exercises, workouts, microcycles } = macrocycle.relatives;

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
			{mesocycles.map((item) => (
				<Carousel.Item>
					<Card>
						<div>Mesocycle: {item._id}</div>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis
								interdum.
							</p>
						</Carousel.Caption>
					</Card>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProgramCarousel;
