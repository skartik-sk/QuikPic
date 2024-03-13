import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: "",
  value: 0,
};
export const createPost = createAsyncThunk("createPost", async (payload) => {
  console.log(payload)
  const url = "http://localhost:1234/post";
  const option = { method: "POST",body:payload, credentials: "include" };
  const response = await fetch(url, option);
  return response.json();
});
export const editPost = createAsyncThunk("editpost", async (payload) => {
  console.log(payload)
  const url = `http://localhost:1234/post/${payload._id}/caption`;
  const option = { method: "PUT",body:payload.data, credentials: "include" };
  const response = await fetch(url, option);
  return response.json();
});
export const createPostReducers = createSlice({
  name: "createPostReducers",
  initialState,
  reducers: {
    getExplore: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      // console.log(action.payload, "action.payload");
      // console.log(state.data, "state.data");
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      // console.log(state.data, "state.data");
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      // console.log(action.payload, "action.payload");
      // console.log(state.data, "state.data");
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      // console.log(state.data, "state.data");
    });
    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { getExplore } = createPostReducers.actions;
export default createPostReducers.reducer;
