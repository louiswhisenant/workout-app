import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../slices/usersApiSlice';
import { removeCredentials } from '../slices/authSlice';
import { useGetCurrentMacrocycleQuery } from '../slices/macrocyclesApiSlice';

import { toast } from 'react-toastify';

import { Container, Button } from 'react-bootstrap';

import Loader from '../components/Loader';
// import Message from '../components/Message';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		data: macrocycle,
		macrocycleLoading,
		macrocycleError,
	} = useGetCurrentMacrocycleQuery();

	useEffect(() => {
		if (macrocycle && !macrocycleLoading) {
		}
	}, [macrocycle, macrocycleLoading]);

	// example redux query implementation:
	// const { data: products, isLoading, error } = useGetProductsQuery();

	return macrocycleLoading ? (
		<Container>
			<Loader />
		</Container>
	) : macrocycle && !macrocycleLoading ? (
		<Container>
			<div>Data found!</div>
		</Container>
	) : (
		<Container>
			<div>No data found.</div>
		</Container>
	);
};

export default HomeScreen;
