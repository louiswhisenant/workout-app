import { useState } from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';

const CreateNewModal = ({ children }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create New</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className='mb-3'>
							<Col xs={4}>
								<Button className='w-100'>Exercise</Button>
							</Col>
							<Col xs={8}>Create new exercise description.</Col>
						</Row>
						<Row className='mb-3'>
							<Col xs={4}>
								<Button className='w-100'>Workout</Button>
							</Col>
							<Col xs={8}>Create new exercise description.</Col>
						</Row>
						<Row className='mb-3'>
							<Col xs={4}>
								<Button className='w-100'>Microcycle</Button>
							</Col>
							<Col xs={8}>Create new exercise description.</Col>
						</Row>
						<Row className='mb-3'>
							<Col xs={4}>
								<Button className='w-100'>Mesocycle</Button>
							</Col>
							<Col xs={8}>Create new exercise description.</Col>
						</Row>
						<Row className='mb-3'>
							<Col xs={4}>
								<Button className='w-100'>Macrocycle</Button>
							</Col>
							<Col xs={8}>Create new exercise description.</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>

			<Button className='btn btn-block px-3' onClick={handleShow}>
				{children}
			</Button>
		</>
	);
};

export default CreateNewModal;
