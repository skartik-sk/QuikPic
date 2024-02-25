import { user } from "@nextui-org/theme";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "kuh",
  value: 0,
};
export const login = createAsyncThunk("userFeeds", async (payload) => {
  console.log(payload.userName, payload.password);
  const url = "http://localhost:1234/login";
  const option = {
    method: "POST",
    body: JSON.stringify({ username: payload.userName, password: payload.password }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',
  };
  const response = await fetch(url, option);
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

export default loginReducers;
