import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { useGetUserProfileQuery } from '../slices/api/profilesApiSlice';
// import { setProfile } from '../slices/state/profileSlice';

import { useLazyGetMacrocycleByIdQuery } from '../slices/api/macrocyclesApiSlice';

import { toast } from 'react-toastify';

import { Container, Button } from 'react-bootstrap';

import Loader from '../components/Loader';
import { setMacrocycle } from '../slices/state/appDataSlice';
// import Message from '../components/Message';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const { profile } = useSelector((state) => state.appData);

	const [
		getCurrentMacrocycle,
		{ data: macroData, isFetching: macroFetching, isLoading: macroLoading },
	] = useLazyGetMacrocycleByIdQuery();

	const isLoading =
		(!macroData || macroLoading || macroFetching || !profile) && true;

	useEffect(() => {
		const loadAppData = async () => {
			const res = await getCurrentMacrocycle(
				profile.current.macrocycle
			).unwrap();
			dispatch(setMacrocycle(res));
		};

		if (profile && profile.current.macrocycle) {
			loadAppData();
		}
	}, [profile, getCurrentMacrocycle, dispatch]);

	return isLoading ? (
		<Container>
			<Loader />
		</Container>
	) : (
		<Container>
			<div>
				<h1>Profile ID:</h1>
				<p>{profile._id}</p>
			</div>
			<div>
				<h1>Macrocycle ID:</h1>
				<p>{macroData._id}</p>
			</div>
		</Container>
	);
};

export default HomeScreen;
