import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
import { createStore } from 'redux';


const store = createStore(reducer);
const app = (
  <Provider store={store}>
      <Todo />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));