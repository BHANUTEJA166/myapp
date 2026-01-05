import axios from "axios";
import { LOAD_ENQUIRIES, ADD_ENQUIRY } from "./EnquiryActionTypes";

// INITIAL LOAD (ONLY ONCE)
export const loadEnquiries = () => async (dispatch, getState) => {
  const { enquiries } = getState().enquiries;
  if (enquiries.length > 0) return;

  const res = await axios.get("/data/database.json");
  dispatch({
    type: LOAD_ENQUIRIES,
    payload: res.data.enquiries || []
  });
};

// SAME AS BUY_IPHONE (PURE REDUX UPDATE)
export const addEnquiry = (enquiry) => ({
  type: ADD_ENQUIRY,
  payload: {
    ...enquiry,
    id: Date.now().toString()
  }
});
