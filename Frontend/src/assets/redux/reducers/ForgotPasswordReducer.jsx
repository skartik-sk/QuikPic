import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email) => {
    const url = "http://localhost:1234/forgotPassword";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      credentials: "include",
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  }
);

export const forgotpasswordReducers = createSlice({
  name: "forgotpasswordReducers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default forgotpasswordReducers.reducer;
