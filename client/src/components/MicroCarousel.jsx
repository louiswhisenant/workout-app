import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Carousel, Card, Row, Col } from 'react-bootstrap';

const MicroCarousel = ({ meso }) => {
	const [index, setIndex] = useState(0);
	const { microcycles } = useSelector((state) => state.appData);
	const { workouts } = useSelector((state) => state.appData);
	// const { exercises } = useSelector((state) => state.appData);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
			{microcycles.map(
				(micro) =>
					micro.relatives.mesocycle === meso && (
						<Carousel.Item key={micro._id}>
							<Card className='p-3'>
								<div>
									<Row>
										<h3>
											Microcycle{' '}
											{micro.index.macrocycle + 1}:{' '}
											{micro._id}
										</h3>
									</Row>
									{workouts.map(
										(workout) =>
											workout.relatives.microcycle ===
												micro._id && (
												<Row key={workout._id}>
													<Col>
														Workout{' '}
														{workout.index
															.macrocycle + 1}
													</Col>
													<Col>{workout._id}</Col>
												</Row>
											)
									)}
								</div>
							</Card>
						</Carousel.Item>
					)
			)}
		</Carousel>
	);
};

export default MicroCarousel;
