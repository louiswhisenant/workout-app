import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const ProgramCarousel = () => {
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
					<Card>
						<div>
							<Row>
								<h3>
									Mesocycle {meso.index.macrocycle + 1}:{' '}
									{meso._id}
								</h3>
							</Row>
							{microcycles.map(
								(micro) =>
									micro.relatives.mesocycle === meso._id && (
										<Row key={micro._id}>
											<Col>
												Microcycle{' '}
												{micro.index.macrocycle + 1}
											</Col>
											<Col>{micro._id}</Col>
										</Row>
									)
							)}
						</div>
					</Card>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProgramCarousel;
