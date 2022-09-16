import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface onPay {
  amount: String;
}

const initialState: onPay = {
  amount: "",
};
const PaySlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    addAmount: (state, action: PayloadAction<String>) => {
      state.amount = action.payload;
    },
  },
});
export const { addAmount } = PaySlice.actions;
export default PaySlice.reducer;
