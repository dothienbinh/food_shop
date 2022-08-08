import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state, action) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlide.actions;

export default userSlide.reducer;
