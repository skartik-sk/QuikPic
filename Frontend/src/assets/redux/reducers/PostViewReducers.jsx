import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
  value: 0,
};


export const getPostByid = createAsyncThunk("getpostByid", async (payload) => {
  console.log(payload);
  const url = `https://quikpik-back.vercel.app//post/${payload}`;

  const option = { method: "GET", credentials: "include" };
  const response = await fetch(url, option);
  return response.json();
});
export const commentToPost = createAsyncThunk("comment", async (payload) => {
  const url = `https://quikpik-back.vercel.app//post/${payload.id}/comment`;
  const option = { method: "PUT",body: JSON.stringify({
    comment: payload.comment,

  }),
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include" };
  const response = await fetch(url, option);
  return response.json();
});

export const postViewReducers = createSlice({
  name: "postViewReducers",
  initialState,
  reducers: {
    getExplore: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPostByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPostByid.fulfilled, (state, action) => {
      // console.log(action.payload, "action.payload");
      // console.log(state.data, "state.data");
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      // console.log(state.data, "state.data");
    });
    builder.addCase(getPostByid.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { getExplore } = postViewReducers.actions;
export default postViewReducers.reducer;
