import axios from 'axios';
import { SEREVER_URL } from '../config';
const FETCH_ORDERS = 'FETCH_ORDERS';

function fetchOrders() {
    return (dispatch: (arg0: { type: string; payload: any; }) => void) => 
      axios.get(`${SEREVER_URL}`).then(({ data }) => {
        dispatch({
          type: FETCH_ORDERS,
          payload: data,
        });
      }).catch((e)=> console.log(e));
  }

export {
    fetchOrders
};