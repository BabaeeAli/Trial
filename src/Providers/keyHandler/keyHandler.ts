import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface keyPad {
  key: String;
  status: boolean;
}

const initialState: keyPad = {
  key: "",
  status: true,
};
const keySlice = createSlice({
  name: "key",
  initialState,
  reducers: {
    enterKey: (state, action: PayloadAction<String>) => {
      if (action.payload === "Enter") {
        state.status = false;
      }
      if (action.payload === "new") {
        state.status = true;
      }
      state.key = action.payload;
    },
    reset:()=>initialState

  },
});
export const { enterKey,reset } = keySlice.actions;
export default keySlice.reducer;
