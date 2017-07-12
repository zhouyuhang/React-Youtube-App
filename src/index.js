import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//Youtube API Key
const API_KEY = 'AIzaSyDXWZyzyrHdAggS7xSK5xZlwogCYTVQmVc';

// Create a new component. This component should produce some HTML
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}


ReactDOM.render(<App />, document.querySelector('.container'));