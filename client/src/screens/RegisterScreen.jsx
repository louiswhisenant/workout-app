import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useRegisterMutation } from '../slices/api/usersApiSlice';
import { setCredentials } from '../slices/state/authSlice';

import { useCreateUserProfileMutation } from '../slices/api/profilesApiSlice';
import { setProfile } from '../slices/state/appDataSlice';

import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [register, { isLoading: registerLoading }] = useRegisterMutation();
	const [createProfile, { isLoading: profileLoading }] =
		useCreateUserProfileMutation();

	const attemptRegister = async () => {
		const res = await register({
			username,
			email,
			password,
		}).unwrap();
		dispatch(setCredentials({ ...res }));

		const profileRes = await createProfile({
			name,
		}).unwrap();
		dispatch(setProfile({ ...profileRes }));
	};

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

		if (password !== confirmPassword) {
			toast.error('Passwords must match.');
		} else {
			try {
				await attemptRegister();

				navigate(redirect);
			} catch (error) {
				toast.error(error?.data?.message || error.error);
			}
		}
	};

	return (
		<FormContainer>
			<h1>Register</h1>

			<Form onSubmit={submitHandler}>
				<Form.Group controlId='name' className='my-3'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter name'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}></Form.Control>
				</Form.Group>

				<Form.Group controlId='username' className='my-3'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='username'
						placeholder='Enter username'
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}></Form.Control>
				</Form.Group>

				<Form.Group controlId='email' className='my-3'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
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

				<Form.Group controlId='confirmPassword' className='my-3'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Confirm Password'
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
						}}></Form.Control>
				</Form.Group>

				<Button
					className='mt-2'
					type='submit'
					variant='primary'
					disabled={registerLoading}>
					Register
				</Button>

				{(registerLoading || profileLoading) && <Loader />}
			</Form>

			<Row className='py-3'>
				<Col>
					Already a User?{' '}
					<Link
						to={
							redirect ? `/login?redirect=${redirect}` : '/login'
						}>
						Sign In
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default RegisterScreen;
