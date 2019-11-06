import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './component/App';
import reducers from './reducers/';

const store = createStore(reducers,applyMiddleware(thunk));

ReactDom.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.querySelector('#root')
);


// import React from 'react';               // make sure to: npm install --save redux
// import ReactDom from 'react-dom';        // and: npm install --save react-redux axios redux-thunk

// import {Provider} from 'react-redux';
// import {createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// import App from './component/App';
// import reducers from './reducers';

// const store = createStore(reducers,applyMiddleware(thunk));
// ReactDom.render(
  // <Provider store={store}>
	// <App/>
  // </Provider>,
  // document.querySelector('#root'));