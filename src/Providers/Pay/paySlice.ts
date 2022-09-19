import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface onPay {
  amount: number;
}

const initialState: onPay = {
  amount: 0,
};
const PaySlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    addAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});
export const { addAmount } = PaySlice.actions;
export default PaySlice.reducer;
