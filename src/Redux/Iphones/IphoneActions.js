import axios from 'axios';
import {
  FETCH_STOCKS_REQUEST,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE,
  BUY_IPHONE,
  UPDATE_STOCK_SUCCESS
} from './IphoneActionTypes';

// Fetch stocks
export const fetchStocks = () => dispatch => {
  dispatch({ type: FETCH_STOCKS_REQUEST });
  axios.get('http://localhost:5000/Stocks')
    .then(res => dispatch({ type: FETCH_STOCKS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_STOCKS_FAILURE, payload: err.message }));
};

// Buy & update
export const buyIphoneAndUpdateStock = id => (dispatch, getState) => {
  const { stocks } = getState().iphones;
  const item = stocks.find(s => s.id === id);
  if (!item || item.stock < 1) return;

  // Optimistic update
  dispatch({ type: BUY_IPHONE, payload: id });

  axios.put(`http://localhost:5000/Stocks/${id}`, { ...item, stock: item.stock - 1 })
    .then(res => dispatch({ type: UPDATE_STOCK_SUCCESS, payload: res.data }))
    .catch(() => dispatch(fetchStocks()));
};
