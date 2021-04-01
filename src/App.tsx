import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { Provider } from 'react-redux';
import OrdersTable from './orders/orders';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <OrdersTable />
    </div>
    </Provider>
  );
}

export default App;
