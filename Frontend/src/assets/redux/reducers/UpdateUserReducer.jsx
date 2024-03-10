import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  loading: false,
  isAuth: false,
  data: null,
  error: "",
};

// Async thunk for fetching user profile
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    const url = "http://localhost:1234/user/profile";
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    const response = await fetch(url, option);
    return response.json();
  }
);

// Async thunk for updating user profile
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (formData) => {
    console.log(formData)
    const url = "http://localhost:1234/user/updateProfile";
    const option = {
      method: "POST",
      body: formData,
      credentials: "include",
    };
    const response = await fetch(url, option);
    return response.json();
  }
);

// Create slice
export const updateuserReducers = createSlice({
  name: "updateuserReducers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        if (action.payload.message === "Unauthorized") {
          state.isAuth = false;
        } else {
          state.isAuth = true;
        }
        state.error = "";
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export async thunks and reducer
// export { fetchUserProfile, updateProfile };
export default updateuserReducers.reducer;
// export default Reducers.reducer;
