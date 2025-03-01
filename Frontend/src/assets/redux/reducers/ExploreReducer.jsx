import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
  value: 0,
};
export const fetchExplore = createAsyncThunk("Explore", async () => {
  const url = "https://quikpik-back.vercel.app//post";
  const option = { method: "GET", credentials: "include" };
  const response = await fetch(url, option);
  return response.json();
});
export const exploreReducers = createSlice({
  name: "Explore",
  initialState,
  reducers: {
    getExplore: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExplore.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchExplore.fulfilled, (state, action) => {
      // console.log(action.payload, "action.payload");
      // console.log(state.data, "state.data");
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      // console.log(state.data, "state.data");
    });
    builder.addCase(fetchExplore.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { getExplore } = exploreReducers.actions;
export default exploreReducers.reducer;
