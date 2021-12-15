import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import Reducer from './Reducer';
import PLP from './component/PLP';
import CartList from './component/CartList'
import { BrowserRouter as Router, Route, Switch, Link ,Routes} from "react-router-dom";
import { Provider } from "react-redux";

function configureStore() {
  return createStore(Reducer);
}
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/PLP">PLP</Link>
          </li>
          <li>
            <Link to="/CartList">CartList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/PLP" component={PLP} />
        <Route exact path="/CartList" component={CartList} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
