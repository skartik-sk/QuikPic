import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  SavedPostsdata: [],
  UserPostdata: [],
  error: "",
  value: 0,
};
export const getSavedPosts = createAsyncThunk("getSavedPosts", async () => {
  const url = "https://quikpik-back.vercel.app//post/getSavedPosts";
  const option = { method: "POST", credentials: "include" };
  const response = await fetch(url, option);
  return response.json();
});
export const getUserPost = createAsyncThunk("getUserPost", async () => {
  console.log("me agaya");
  const url = "https://quikpik-back.vercel.app//post/getUserPosts";
  const option = { method: "POST", credentials: "include" };
  const response = await fetch(url, option);
  //console.log(response.json());
  return response.json();
});

export const getSavedPostsReducers = createSlice({
  name: "getSavedPosts",
  initialState,
  reducers: {
    getExplore: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getSavedPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSavedPosts.fulfilled, (state, action) => {
      // console.log(action.payload, "action.payload");
      // console.log(state.data, "state.data");
      state.loading = false;
      state.SavedPostsdata = action.payload;
      state.error = "";
      // console.log(state.data, "state.data");
    });
    builder.addCase(getSavedPosts.rejected, (state, action) => {
      state.loading = false;
      state.UserPostdata = [];
      state.error = action.error.message;
    });
    builder.addCase(getUserPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserPost.fulfilled, (state, action) => {
      // console.log(action.payload, "action.payload");
      // console.log(state.data, "state.data");
      state.loading = false;
      state.UserPostdata = action.payload;
      state.error = "";
      // console.log(state.data, "state.data");
    });
    builder.addCase(getUserPost.rejected, (state, action) => {
      state.loading = false;
      state.UserPostdata = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { getExplore } = getSavedPostsReducers.actions;
export default getSavedPostsReducers.reducer;
