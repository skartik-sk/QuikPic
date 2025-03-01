import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: null,
  error: "kuh",
  value: 0,
};

export const signup = createAsyncThunk("user/signup", async (payload) => {
  const url = "https://quikpik-back.vercel.app//signup"; 
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      "sameSite": "none",
    },
    credentials: "include",
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
});

export const signupReducer = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default signupReducer.reducer;
