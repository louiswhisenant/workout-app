import { useState } from 'react';

import { useSelector } from 'react-redux';

import CreateNewModal from './CreateNewModal';

import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { FaCalendar, FaHome, FaPlus } from 'react-icons/fa';
import { FaDumbbell } from 'react-icons/fa6';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
	const [show, setShow] = useState(false);
	const { profile } = useSelector((state) => state.appData);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<footer>
			<Navbar
				fixed='bottom'
				bg='dark'
				variant='dark'
				className='justify-content-center'>
				<Container>
					<LinkContainer to='/'>
						<Nav.Item className='mx-3'>
							<Button className='btn btn-block px-3'>
								<FaHome />
							</Button>
						</Nav.Item>
					</LinkContainer>
					<LinkContainer to={`/workouts/${profile.current.workout}`}>
						<Nav.Item className='mx-3'>
							<Button className='btn btn-block px-3'>
								<FaDumbbell />
							</Button>
						</Nav.Item>
					</LinkContainer>
					<LinkContainer to='/program'>
						<Nav.Item className='mx-3'>
							<Button className='btn btn-block px-3'>
								<FaCalendar />
							</Button>
						</Nav.Item>
					</LinkContainer>
					<Nav.Item className='mx-3'>
						<CreateNewModal>
							<FaPlus />
						</CreateNewModal>
					</Nav.Item>
				</Container>
			</Navbar>
		</footer>
	);
};

export default Footer;
