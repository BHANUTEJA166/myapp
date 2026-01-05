import { LOAD_ENQUIRIES, ADD_ENQUIRY } from "./EnquiryActionTypes";

const initialState = {
  enquiries: []
};

export const enquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ENQUIRIES:
      return { enquiries: action.payload };

    case ADD_ENQUIRY:
      return {
        enquiries: [...state.enquiries, action.payload]
      };

    default:
      return state;
  }
};
