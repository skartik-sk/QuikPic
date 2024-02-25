import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
  value: 0,
};
export const fetchFeed = createAsyncThunk("userFeeds", async () => {
  const url = "http://localhost:1234/post/";
  const option = { method: "GET" };
  const response = await fetch(url, option);
  return response.json();
});
export const ExploreReducers = createSlice({
  name: "userFeed",
  initialState,
  reducers: {
    getFeed: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeed.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeed.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
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

export default ExploreReducers.reducer;
