import { createStore } from 'redux';
import { ACTIONS } from 'Actions/Global';

const initialState = {
	name: 'Ryan',
};

function globalReducer(state = initialState, action) {
	switch (action.type) {
		case ACTIONS.UPDATE_NAME: {
			const { name } = action.payload;

			return {
				...state,
				name,
			};
		}
		default:
			return state;
	}
}

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();
export function createReduxStore() {
	const store = createStore(globalReducer, enableReduxDevTools);
	return store;
}
