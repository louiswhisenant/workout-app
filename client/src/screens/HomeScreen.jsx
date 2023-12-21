import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetUserProfileQuery } from '../slices/api/profilesApiSlice';

import { toast } from 'react-toastify';

import { Container, Button } from 'react-bootstrap';

import Loader from '../components/Loader';
// import Message from '../components/Message';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const {
		data: profile,
		profileLoading,
		profileError,
	} = useGetUserProfileQuery();

	// useEffect(() => {
	// 	if (macrocycle && !macrocycleLoading) {
	// 		// const {
	// 		// 	data: mesocycles,
	// 		// 	mesocyclesLoading,
	// 		// 	mesocyclesError,
	// 		// } = useGetMesoCyclesByMacrocycleQuery(":id");
	// 	}
	// }, [macrocycle, macrocycleLoading]);

	// example redux query implementation:
	// const { data: products, isLoading, error } = useGetProductsQuery();

	return profileLoading ? (
		<Container>
			<Loader />
		</Container>
	) : profile && !profileLoading ? (
		<Container>
			<div>Profile loaded!</div>
		</Container>
	) : (
		<Container>
			<div>No data found.</div>
		</Container>
	);
};

export default HomeScreen;
