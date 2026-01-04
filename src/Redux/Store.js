import { configureStore } from "@reduxjs/toolkit";
import { iphoneReducer } from "./Iphones/IphoneReducer";
import { enquiryReducer } from "./Enquiries/EnquiryReducer";

export const store = configureStore({
  reducer: {
    iphones: iphoneReducer,
    enquiries: enquiryReducer
  }
});










// import { configureStore } from '@reduxjs/toolkit';
// import { iphoneReducer } from './Iphones/IphoneReducer';

// export const store = configureStore({
//   reducer: {
//     iphones: iphoneReducer
//   }
// });
