import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

export interface IUserData {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
};

const initialState: IUserData = {
  login: '',
  id: 0,
  avatar_url: '',
  html_url: '',
  name: '',
  bio: '',
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.login = action.payload.login;
      state.id = action.payload.id;
      state.avatar_url = action.payload.avatar_url;
      state.html_url = action.payload.html_url;
      state.name = action.payload.name;
      state.bio = action.payload.bio;
    },
    clearUser: (state) => {
      state = initialState;
    },
  }
});

export const { setUser, clearUser } = userSlice.actions;


export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
