import { user } from "@nextui-org/theme";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: true,
  data: [],
  error: "kuh",
  value: 0,
};
export const login = createAsyncThunk("userFeeds", async (payload) => {
  console.log(payload.userName, payload.password);
  const url = "https://quikpic-backend.onrender.com/login";
  const option = {
   
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const response = await axios.post(url,{username: payload.userName, password: payload.password } ,option);
  return response.json();
});
export const loginReducers = createSlice({
  name: "loginReducers",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default loginReducers.reducer;
