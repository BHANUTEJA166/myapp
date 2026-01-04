// import {
//   FETCH_STOCKS_REQUEST,
//   FETCH_STOCKS_SUCCESS,
//   FETCH_STOCKS_FAILURE,
//   BUY_IPHONE
// } from './IphoneActionTypes';

// const initialState = {
//   loading: false,
//   stocks: [],
//   error: ''
// };

// export const iphoneReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_STOCKS_REQUEST:
//       return { ...state, loading: true };

//     case FETCH_STOCKS_SUCCESS:
//       return {
//         loading: false,
//         stocks: action.payload,
//         error: ''
//       };

//     case FETCH_STOCKS_FAILURE:
//       return {
//         loading: false,
//         stocks: [],
//         error: action.payload
//       };

//     case BUY_IPHONE:
//       return {
//         ...state,
//         stocks: state.stocks.map(item =>
//           item.id === action.payload && item.stock > 0
//             ? { ...item, stock: item.stock - 1 }
//             : item
//         )
//       };

//     default:
//       return state;
//   }
// };





















//ORIGINAL
// import {
//   FETCH_STOCKS_REQUEST,
//   FETCH_STOCKS_SUCCESS,
//   FETCH_STOCKS_FAILURE,
//   BUY_IPHONE,
//   UPDATE_STOCK_SUCCESS
// } from './IphoneActionTypes';

// const initialState = {
//   loading: false,
//   stocks: [],
//   error: ''
// };

// export const iphoneReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_STOCKS_REQUEST:
//       return { ...state, loading: true };
//     case FETCH_STOCKS_SUCCESS:
//       return { loading: false, stocks: action.payload, error: '' };
//     case FETCH_STOCKS_FAILURE:
//       return { loading: false, stocks: [], error: action.payload };
//     case BUY_IPHONE:
//       return {
//         ...state,
//         stocks: state.stocks.map(s =>
//           s.id === action.payload ? { ...s, stock: s.stock - 1 } : s
//         )
//       };
//     case UPDATE_STOCK_SUCCESS:
//       return {
//         ...state,
//         stocks: state.stocks.map(s =>
//           s.id === action.payload.id ? action.payload : s
//         )
//       };
//     default:
//       return state;
//   }
// };


//GIT REDUCER
// import {
//   FETCH_STOCKS_REQUEST,
//   FETCH_STOCKS_SUCCESS,
//   FETCH_STOCKS_FAILURE,
//   BUY_IPHONE,
//   UPDATE_STOCK_SUCCESS
// } from './IphoneActionTypes';

// const initialState = {
//   loading: false,
//   stocks: [],
//   error: ''
// };

// export const iphoneReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_STOCKS_REQUEST:
//       return { ...state, loading: true };
//     case FETCH_STOCKS_SUCCESS:
//       return { loading: false, stocks: action.payload, error: '' };
//     case FETCH_STOCKS_FAILURE:
//       return { loading: false, stocks: [], error: action.payload };
//     case BUY_IPHONE:
//       return {
//         ...state,
//         stocks: state.stocks.map(s =>
//           s.id === action.payload ? { ...s, stock: s.stock - 1 } : s
//         )
//       };
//     case UPDATE_STOCK_SUCCESS:
//       return {
//         ...state,
//         stocks: state.stocks.map(s =>
//           s.id === action.payload.id ? action.payload : s
//         )
//       };
//     default:
//       return state;
//   }
// };


//VERCEL
// import {
//   FETCH_STOCKS_REQUEST,
//   FETCH_STOCKS_SUCCESS,
//   FETCH_STOCKS_FAILURE,
//   BUY_IPHONE,
//   UPDATE_STOCK_SUCCESS
// } from './IphoneActionTypes';

// const initialState = {
//   loading: false,
//   stocks: [],
//   error: ''
// };

// export const iphoneReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_STOCKS_REQUEST:
//       return { ...state, loading: true };

//     case FETCH_STOCKS_SUCCESS:
//       return { loading: false, stocks: action.payload, error: '' };

//     case FETCH_STOCKS_FAILURE:
//       return { loading: false, stocks: [], error: action.payload };

//     case BUY_IPHONE:
//       return {
//         ...state,
//         stocks: state.stocks.map(s =>
//           s.id === action.payload
//             ? { ...s, stock: s.stock - 1 }
//             : s
//         )
//       };

//     case UPDATE_STOCK_SUCCESS:
//       return {
//         ...state,
//         stocks: state.stocks.map(s =>
//           s.id === action.payload.id ? action.payload : s
//         )
//       };

//     default:
//       return state;
//   }
// };


import {
  FETCH_STOCKS_REQUEST,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE,
  BUY_IPHONE
} from "./IphoneActionTypes";

const initialState = {
  loading: false,
  stocks: [],
  error: ""
};

export const iphoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS_REQUEST:
      return { ...state, loading: true };

    case FETCH_STOCKS_SUCCESS:
      return {
        loading: false,
        stocks: action.payload,
        error: ""
      };

    case FETCH_STOCKS_FAILURE:
      return {
        loading: false,
        stocks: [],
        error: action.payload
      };

    case BUY_IPHONE:
      return {
        ...state,
        stocks: state.stocks.map(item =>
          item.id === action.payload && item.stock > 0
            ? { ...item, stock: item.stock - 1 }
            : item
        )
      };

    default:
      return state;
  }
};
