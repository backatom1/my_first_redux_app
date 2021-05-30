import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

function Counter({ counter, inc, dec, rnd_inc, rnd_dec }) {
	return (
		<div className="jumbotron">
			<h1 >{counter}</h1>
			<button onClick={inc} className="btn btn-primary">Increment</button>
			<button onClick={dec} className="btn btn-primary">Decrement</button>
			<button onClick={rnd_inc} className="btn btn-secondary">Random Inc</button>
			<button onClick={rnd_dec} className="btn btn-secondary">Random Dec</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state
	}
};

export default connect(mapStateToProps, actions)(Counter)
