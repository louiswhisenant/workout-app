import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLazyGetMacrocycleByIdQuery } from '../slices/api/macrocyclesApiSlice';
import { useLazyGetMesocycleByMacrocycleQuery } from '../slices/api/mesocyclesApiSlice';
import { useLazyGetMicrocycleByMacrocycleQuery } from '../slices/api/microcyclesApiSlice';
import { setMacrocycle } from '../slices/state/appDataSlice';
import { setMesocycles } from '../slices/state/appDataSlice';
import { setMicrocycles } from '../slices/state/appDataSlice';

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
	const [
		getMicrocycles,
		{ data: microData, isFetching: microFetching, isLoading: microLoading },
	] = useLazyGetMicrocycleByMacrocycleQuery();

	// Define loading status
	const macroWorking = (macroLoading || macroFetching) && true;
	const mesoWorking = (mesoLoading || mesoFetching) && true;
	const microWorking = (microLoading || microFetching) && true;

	const isWorking =
		(macroWorking || mesoWorking || microWorking || !profile) && true;
	const isReady = macroData && mesoData && microData && profile && true;

	// get macorcycle data
	useEffect(() => {
		const loadMacrocycle = async () => {
			const macrocycle = await getCurrentMacrocycle(
				profile.current.macrocycle
			).unwrap();
			dispatch(setMacrocycle(macrocycle));
		};

		if (profile && profile.current.macrocycle) {
			loadMacrocycle();
		}
		console.log('macrocycle');
	}, [profile, getCurrentMacrocycle, dispatch]);

	// get mesocycle data
	useEffect(() => {
		const loadMesocycles = async () => {
			const mesocycles = await getMesocycles(macroData._id).unwrap();
			dispatch(setMesocycles(mesocycles));
		};

		if (macroData && !macroLoading) {
			loadMesocycles();
		}
	}, [macroData, macroLoading, getMesocycles, dispatch]);

	// get microcycle data
	useEffect(() => {
		const loadMicrocycles = async () => {
			const microcycles = await getMicrocycles(macroData._id).unwrap();
			dispatch(setMicrocycles(microcycles));
		};

		if (macroData && !macroLoading) {
			loadMicrocycles();
		}
	}, [macroData, macroLoading, getMicrocycles, dispatch]);

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
			<div>
				You need to create a program, {profile.name && profile.name}.
			</div>
		</Container>
	);
};

export default HomeScreen;
