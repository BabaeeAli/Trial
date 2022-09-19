import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

interface onGiven {
  amount: String;
}

const initialState: onGiven = {
  amount: "",
};

 const GivenSlice = createSlice({
  name: "given",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<String>) => {
      console.log(action.payload)
      state.amount = action.payload;
      
    },
  },
});
export const {setAmount}=GivenSlice.actions;
export default GivenSlice.reducer;
