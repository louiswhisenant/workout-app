import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLazyGetMacrocycleByIdQuery } from '../slices/api/macrocyclesApiSlice';
import { useLazyGetMesocycleByMacrocycleQuery } from '../slices/api/mesocyclesApiSlice';
import { setMacrocycle } from '../slices/state/appDataSlice';
import { setMesocycles } from '../slices/state/appDataSlice';

import { toast } from 'react-toastify';

import { Container, Button } from 'react-bootstrap';

import ProgramCarousel from '../components/ProgramCarousel';
import Loader from '../components/Loader';
// import Message from '../components/Message';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const { profile } = useSelector((state) => state.appData);

	const [
		getCurrentMacrocycle,
		{ data: macroData, isFetching: macroFetching, isLoading: macroLoading },
	] = useLazyGetMacrocycleByIdQuery();
	const [
		getMesocycles,
		{ data: mesoData, isFetching: mesoFetching, isLoading: mesoLoading },
	] = useLazyGetMesocycleByMacrocycleQuery();

	const macroWorking = (macroLoading || macroFetching) && true;
	const mesoWorking = (mesoLoading || mesoFetching) && true;
	const isWorking = (macroWorking || mesoWorking || !profile) && true;

	const isReady = macroData && mesoData && profile && true;

	useEffect(() => {
		const loadMacrocycle = async () => {
			const macrocycle = await getCurrentMacrocycle(
				profile.current.macrocycle
			).unwrap();
			dispatch(setMacrocycle(macrocycle));
		};

		if (profile && profile.hasOwnProperty('current.macrocycle')) {
			loadMacrocycle();
		}
	}, [profile, getCurrentMacrocycle, dispatch]);

	useEffect(() => {
		const loadMesocycles = async () => {
			const mesocycles = await getMesocycles(macroData._id).unwrap();
			dispatch(setMesocycles(mesocycles));
		};

		if (macroData && !macroLoading) {
			loadMesocycles();
		}
	}, [macroData, macroLoading, getMesocycles, dispatch]);

	return isWorking ? (
		<Container>
			<Loader />
		</Container>
	) : isReady ? (
		<Container>
			<h1>Profile: {profile._id}</h1>
			<ProgramCarousel />
		</Container>
	) : (
		<Container>
			<div>You need to create a program.</div>
		</Container>
	);
};

export default HomeScreen;
