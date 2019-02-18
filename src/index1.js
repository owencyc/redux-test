import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './index.reducer'


//创建store
const store = createStore(reducer);
console.log(store);
console.log(store.getState());

//订阅任务
//订阅事件
store.subscribe(() =>
  console.log(store.getState())
);
//任务分发
//store.dispatch(increase);



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
