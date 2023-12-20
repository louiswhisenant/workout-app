import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { useGetMicrocycleQuery } from '../slices/microcyclesApiSlice';

import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
} from 'react-bootstrap';

import { FaInfo, FaArrowsAltH, FaPencilAlt } from 'react-icons/fa';
import Loader from '../components/Loader';
import Message from '../components/Message';

const MicrocycleScreen = () => {
	// const { id: microcycleId } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// useGetMicrocycleQuery
	// const {
	// 	data: microcycle,
	// 	isLoading,
	// 	error,
	// } = useGetMicrocycleQuery(microcycleId);

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>

			{/* {isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : ( */}
			<>
				<Row>
					<Col md={3}>
						<h3>Session 1</h3>
						<h4>{Date.now()}</h4>
					</Col>
					<Col md={3}>
						<h3>Session 1</h3>
						<h4>{Date.now()}</h4>
					</Col>
					<Col md={3}>
						<h3>Session 1</h3>
						<h4>{Date.now()}</h4>
					</Col>
					<Col md={3}>
						<h3>Session 1</h3>
						<h4>{Date.now()}</h4>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<Card>
							<ListGroup>
								<ListGroup.Item>
									<Row>
										<Col xs={6}>
											<h4>Bench Press</h4>
											<h5>5 sets x 10reps</h5>
										</Col>
										<Col>
											<Row>
												<Button
													type='button'
													className='btn btn-block btn-secondary'>
													<FaInfo />
												</Button>
											</Row>
											<Row className='mt-2'>
												<Button
													type='button'
													className='btn btn-block'>
													<FaArrowsAltH />
												</Button>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												1
											</span>
											<span>225 x 10 reps</span>
										</Col>
										<Col>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												2
											</span>
											<span>225 x 10 reps</span>
										</Col>
										<Col>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												3
											</span>
											<span>225 x 10 reps</span>
										</Col>
										<Col>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												4
											</span>
											<span>225 x 10 reps</span>
										</Col>
										<Col>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												5
											</span>
											<span>225 x 10 reps</span>
										</Col>
										<Col>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Button
										className='btn-block'
										type='button'
										onClick={() => {
											console.log('click');
										}}>
										Notes <FaPencilAlt />
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</>
			{/* )} */}
		</>
	);
};

export default MicrocycleScreen;
