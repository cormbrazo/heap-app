import React from 'react';
import { combineProviders } from 'react-combine-providers';
import { render } from 'react-dom';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { createReduxStore } from './redux';
import Home from 'Routes/Home';
import Login from 'Routes/Login';
import 'Node/reset-css/less/reset.less';
import 'CSS/theme.css';

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
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
};

render(
	<MasterProvider>
		<App />
	</MasterProvider>,
	document.querySelector('#root')
);
