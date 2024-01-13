import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import MicroCarousel from './MicroCarousel';

const MesoCarousel = () => {
	const [index, setIndex] = useState(0);
	const { macrocycle } = useSelector((state) => state.appData);
	const { mesocycles } = useSelector((state) => state.appData);
	const { microcycles } = useSelector((state) => state.appData);
	// const { workouts } = useSelector((state) => state.appData);
	// const { exercises } = useSelector((state) => state.appData);

	const { exercises, workouts } = macrocycle.relatives;

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
			{mesocycles.map((meso) => (
				<Carousel.Item key={meso._id}>
					<Card className='p-3'>
						<div>
							<Row>
								<h3>
									Mesocycle {meso.index.macrocycle + 1}:{' '}
									{meso._id}
								</h3>
							</Row>
							<MicroCarousel meso={meso._id} />
						</div>
					</Card>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default MesoCarousel;
