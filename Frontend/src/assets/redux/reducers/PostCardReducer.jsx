import { user } from "@nextui-org/theme";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "kuh",
  value: 0,
  liked: false,
  bookmarked: false,
};
export const like = createAsyncThunk("like", async (payload) => {
  console.log(payload.id);
  const id = payload.id;
  const url = `http://localhost:1234/post/${id}/like`;
  const option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  const response = await fetch(url, option);
  return response.json();
});
export const bookmark = createAsyncThunk("bookmark", async (payload) => {
  console.log(payload.id);
  const id = payload.id;
  const url = `http://localhost:1234/post/${id}/saveAPost`;
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  const response = await fetch(url, option);
  return response.json();
});
export const PostCardReducer = createSlice({
  name: "PostCardReducer",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(bookmark.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(bookmark.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      //   if (state.bookmarked === true) {
      //     state.bookmarked = false;
      //   }else{
      //     state.bookmarked = true;
      //   }
      state.error = "";
    });
    builder.addCase(bookmark.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
    builder.addCase(like.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(like.fulfilled, (state, action) => {
      state.loading = false;
      //   if (state.liked === true) {
      //     state.liked = false;
      //   }
      //     else{
      //         state.liked = true;
      //     }
      state.data = action.payload;

      state.error = "";
    });
    builder.addCase(like.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default PostCardReducer.reducer;
