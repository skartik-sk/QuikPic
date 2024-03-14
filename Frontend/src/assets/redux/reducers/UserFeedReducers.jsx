import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
  value: 0,
};
export const fetchFeed = createAsyncThunk("userFeeds", async () => {
  const url = "https://quikpic-backend.onrender.com/userFeed/";
  const option = { method: "GET", credentials: "include" };
  const response = await fetch(url, option);
  return response.json();
});

export const userFeedReducers = createSlice({
  name: "userFeeds",
  initialState,
  reducers: {
    getExplore: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeed.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeed.fulfilled, (state, action) => {
      // console.log(action.payload, "action.payload");
      // console.log(state.data, "state.data");
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      // console.log(state.data, "state.data");
    });
    builder.addCase(fetchFeed.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { getExplore } = userFeedReducers.actions;
export default userFeedReducers.reducer;
