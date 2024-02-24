import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Carousel, Card, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MicroCarousel = ({ meso }) => {
	const [index, setIndex] = useState(0);
	const { microcycles } = useSelector((state) => state.appData);
	const { workouts } = useSelector((state) => state.appData);
	// const { exercises } = useSelector((state) => state.appData);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			className='p-5 rounded'
			activeIndex={index}
			onSelect={handleSelect}
			interval={null}>
			{microcycles.map(
				(micro) =>
					micro.relatives.mesocycle === meso && (
						<Carousel.Item key={micro._id}>
							<Card className='p-3 mx-2'>
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
												<LinkContainer
													to={`/workouts/${workout._id}`}
													key={workout._id}
													className='btn btn-primary btn-block mt-2'>
													<Row>
														<Col>
															Workout{' '}
															{workout.index
																.microcycle + 1}
														</Col>
														<Col>{workout._id}</Col>
													</Row>
												</LinkContainer>
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
