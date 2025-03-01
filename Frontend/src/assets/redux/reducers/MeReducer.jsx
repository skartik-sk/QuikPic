import { user } from "@nextui-org/theme";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuth: false,
  data: [],
  error: "",
};
export const me = createAsyncThunk("me", async () => {
  const url = "https://quikpik-back.vercel.app//user/profile";
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  const response = await fetch(url, option);

  return response.json();
});
export const MeReducer = createSlice({
  name: "MeReducer",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(me.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(me.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      if (action.payload.message == "Unauthorized"){
        state.isAuth = false;
      } 
      else{state.isAuth = true;}
      state.error = "";
    });
    builder.addCase(me.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default MeReducer.reducer;
