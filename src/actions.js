export const inc = () => ({ type: 'INCREMENT' });
export const dec = () => ({ type: 'DECREMENT' });
export const rnd_inc = () => {
	return { type: 'RANDOM_INC', value: Math.floor(Math.random() * 10) };
};
export const rnd_dec = () => {
	return { type: 'RANDOM_DEC', value: Math.floor(Math.random() * 10) };
};
