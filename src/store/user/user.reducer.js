import { createSlice } from "@reduxjs/toolkit";

//import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
      //값을 직접 변경하는 것처럼 보이지만, 실제로는 아니다. 
    }
  }
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;