import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";
import { configureStore } from "redux";
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';


// const store = configureStore(rootReducer);
const store = configureStore(searchRobots)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
