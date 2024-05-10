import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LnBvbmRva2RpZ2l0YWwucG9uZG9rcXUuaWRcL2FwaVwvbG9naW4iLCJpYXQiOjE2OTU0MzcxMzQsImV4cCI6MTY5ODAyOTEzNCwibmJmIjoxNjk1NDM3MTM0LCJqdGkiOiIwaHdWbEFQV0VSbE1RMVp3Iiwic3ViIjo1NzEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.P7zjYpa4WQImoyGZqPpSMamEJIY-JmADDpKQTq42MCA',
    username: '',
  },
  reducers: {
    SetToken(state, action) {
      state.token = action.payload;
    },
    SetUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const {SetToken, SetUsername} = authSlice.actions;

export default authSlice.reducer;
