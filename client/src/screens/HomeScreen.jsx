import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLogoutMutation } from '../slices/usersApiSlice';
import { removeCredentials } from '../slices/authSlice';

import { toast } from 'react-toastify';

import { Container, Button } from 'react-bootstrap';

// import Loader from '../components/Loader';
// import Message from '../components/Message';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [logout] = useLogoutMutation();

	// example redux query implementation:
	// const { data: products, isLoading, error } = useGetProductsQuery();

	const onLogout = async () => {
		try {
			await logout().unwrap();
			toast.success('You have been successfully logged out.');
			dispatch(removeCredentials());
			navigate('login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Button
				className='btn btn-block'
				variant='primary'
				onClick={onLogout}>
				Logout
			</Button>
		</Container>
	);
};

export default HomeScreen;
