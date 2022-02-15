import React, { lazy, Suspense } from 'react';
import { combineProviders } from 'react-combine-providers';
import { render } from 'react-dom';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import {
	Navigate,
	HashRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import { createReduxStore } from './redux';
import Loader from 'Atoms/Loader';
import 'Node/reset-css/less/reset.less';
import 'CSS/theme.css';
import content from './index.content.json';

const Home = lazy(() => import('Routes/Home'));
const Login = lazy(() => import('Routes/Login'));
const { loader } = content;

const providers = combineProviders();
providers.push(Provider, { store: createReduxStore() });
providers.push(IconContext.Provider, {
	value: {
		color: 'white',
		className: 'react-icons',
		style: { verticalAlign: 'middle' },
	},
});
const MasterProvider = providers.master();

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loader fullScreen text={loader} />}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route path="*" element={<Navigate replace to="/" />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

render(
	<MasterProvider>
		<App />
	</MasterProvider>,
	document.querySelector('#root')
);
