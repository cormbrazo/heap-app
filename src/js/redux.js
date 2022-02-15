import { createStore } from 'redux';
import { ACTIONS } from 'Actions/Global';

const initialState = {
	done: [],
	inProgress: [],
	name: 'Ryan',
	toDo: [],
};

function globalReducer(state = initialState, action) {
	switch (action.type) {
		case ACTIONS.ADD_CARD: {
			const { title, type } = action.payload;

			switch (type) {
				case 'toDo':
					return {
						...state,
						toDo: [
							...state.toDo,
							{
								title,
							},
						],
					};
				case 'inProgress':
					return {
						...state,
						inProgress: [
							...state.inProgress,
							{
								title,
							},
						],
					};
				case 'done':
					return {
						...state,
						done: [
							...state.done,
							{
								title,
							},
						],
					};
				default:
					return state;
			}
		}
		case ACTIONS.DELETE_CARD: {
			const { index, type } = action.payload;
			const { toDo, inProgress, done } = state;

			switch (type) {
				case 'toDo':
					return {
						...state,
						toDo: toDo.filter((_, i) => i !== index),
					};
				case 'inProgress':
					return {
						...state,
						inProgress: inProgress.filter((_, i) => i !== index),
					};
				case 'done':
					return {
						...state,
						done: done.filter((_, i) => i !== index),
					};
				default:
					return state;
			}
		}
		case ACTIONS.MOVE_CARD: {
			const { index, prev, type } = action.payload;
			const { toDo, inProgress, done } = state;

			switch (type) {
				case 'toDo':
					if (prev) {
						return {
							...state,
							done: [...done, toDo[index]],
							toDo: toDo.filter((_, i) => i !== index),
						};
					} else {
						return {
							...state,
							inProgress: [...inProgress, toDo[index]],
							toDo: toDo.filter((_, i) => i !== index),
						};
					}
				case 'inProgress':
					if (prev) {
						return {
							...state,
							toDo: [...toDo, inProgress[index]],
							inProgress: inProgress.filter((_, i) => i !== index),
						};
					} else {
						return {
							...state,
							done: [...done, inProgress[index]],
							inProgress: inProgress.filter((_, i) => i !== index),
						};
					}
				case 'done':
					if (prev) {
						return {
							...state,
							inProgress: [...inProgress, done[index]],
							done: done.filter((_, i) => i !== index),
						};
					} else {
						return {
							...state,
							toDo: [...toDo, done[index]],
							done: done.filter((_, i) => i !== index),
						};
					}
				default:
					return state;
			}
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
