const reducer = (state = 5, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RANDOM_INC':
			return state + action.value;
		case 'RANDOM_DEC':
			return state - action.value;
		default:
			return state;
	}
};

export default reducer;