import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import '../src/style.scss';
import reportWebVitals from './reportWebVitals';
import postsReducer from './store/reducers/posts';
import usersReducer from './store/reducers/users';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
