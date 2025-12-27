import { configureStore } from '@reduxjs/toolkit';
import { iphoneReducer } from './Iphones/IphoneReducer';

export const store = configureStore({
  reducer: {
    iphones: iphoneReducer
  }
});
