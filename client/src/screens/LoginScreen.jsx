import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const Login = () => {
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();

	const { userInfo } = useSelector((state) => state.auth);

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, redirect, navigate]);

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await login({ account, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate(redirect);
		} catch (error) {
			toast.error(error?.data?.message || error.error);
		}
	};

	return (
		<FormContainer>
			<h1>Sign In</h1>

			<Form onSubmit={submitHandler}>
				<Form.Group controlId='account' className='my-3'>
					<Form.Label>Email or Username</Form.Label>
					<Form.Control
						type='account'
						placeholder='Enter email/username'
						value={account}
						onChange={(e) => {
							setAccount(e.target.value);
						}}></Form.Control>
				</Form.Group>

				<Form.Group controlId='password' className='my-3'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}></Form.Control>
				</Form.Group>

				<Button
					className='mt-2'
					type='submit'
					variant='primary'
					disabled={isLoading}>
					Sign In
				</Button>

				{isLoading && <Loader />}
			</Form>

			<Row className='py-3'>
				<Col>
					New Customer?{' '}
					<Link
						to={
							redirect
								? `/register?redirect=${redirect}`
								: '/register'
						}>
						Register
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default Login;
