import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
// import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='/login' element={<LoginScreen />} />
			<Route path='/register' element={<RegisterScreen />} />

			<Route path='' element={<PrivateRoute />}>
				<Route index={true} path='/' element={<HomeScreen />} />
				{/* <Route path='/profile' element={<ProfileScreen />} /> */}
			</Route>
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
