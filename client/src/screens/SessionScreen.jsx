import { useState } from 'react';
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

import { FaInfo, FaArrowsAltH, FaPencilAlt, FaSave } from 'react-icons/fa';
import Loader from '../components/Loader';
import Message from '../components/Message';

const SessionScreen = () => {
	// const { id: microcycleId } = useParams();

	const [notes, setNotes] = useState('');
	const [isTextArea, setIsTextArea] = useState(false);

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
					<Col>
						<h3>Session 1</h3>
						<h4>{Date.now()}</h4>
					</Col>
				</Row>
				<Row>
					<Col lg={6} xl={4} className='mb-3'>
						<Card>
							<ListGroup>
								<ListGroup.Item>
									<Row className='mb-3'>
										<Col xs={6}>
											<h4>Bench Press</h4>
											<h5>5 sets x 10 reps</h5>
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

									<Row
										display='flex'
										className='mb-2 align-items-center'>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												1
											</span>{' '}
											<span>225 x 10 reps</span>
										</Col>
										<Col className='d-flex justify-content-end'>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row
										display='flex'
										className='mb-2 align-items-center'>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												1
											</span>{' '}
											<span>225 x 10 reps</span>
										</Col>
										<Col className='d-flex justify-content-end'>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row className='mb-2 align-items-center'>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												1
											</span>{' '}
											<span>225 x 10 reps</span>
										</Col>
										<Col
											display='flex'
											className='d-flex justify-content-end'>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row className='mb-2 align-items-center'>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												1
											</span>{' '}
											<span>225 x 10 reps</span>
										</Col>
										<Col
											display='flex'
											className='d-flex justify-content-end'>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
									<Row className='mb-2 align-items-center'>
										<Col>
											<span className='rounded-circle bg-secondary p-2 text-light'>
												1
											</span>{' '}
											<span>225 x 10 reps</span>
										</Col>
										<Col
											display='flex'
											className='d-flex justify-content-end'>
											<Button
												type='button'
												className='btn btn-block'>
												Performance
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									{!isTextArea ? (
										<>
											{notes !== '' && <p>{notes}</p>}
											<Button
												className='btn-block'
												type='button'
												onClick={() => {
													setIsTextArea(!isTextArea);
												}}>
												Notes <FaPencilAlt />
											</Button>
										</>
									) : (
										<>
											<Form>
												<Form.Group
													className='mb-3'
													controlId='textarea-1'>
													<Form.Label>
														Notes
													</Form.Label>
													<Form.Control
														as='textarea'
														rows={3}
														value={notes}
														onChange={(e) =>
															setNotes(
																e.target.value
															)
														}
													/>
												</Form.Group>
											</Form>
											<Button
												className='btn-block'
												type='button'
												onClick={() => {
													setIsTextArea(!isTextArea);
												}}>
												Save <FaSave />
											</Button>
										</>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>

					<Col lg={6} xl={4} className='mb-3'>
						<Card>
							<ListGroup>
								<ListGroup.Item>
									<Row>
										<Col xs={6}>
											<h4>Pullups</h4>
											<h5>4 sets x 8 reps</h5>
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
												2
											</span>
											<span>225 x 8 reps</span>
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
											<span>225 x 8 reps</span>
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
											<span>225 x 8 reps</span>
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
											<span>225 x 8 reps</span>
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

					<Col lg={6} xl={4} className='mb-3'>
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

					<Col lg={6} xl={4} className='mb-3'>
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

					<Col lg={6} xl={4} className='mb-3'>
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

export default SessionScreen;
