import {apiSlice} from '../../../redux/api/apiSlice';
import {SetToken, SetUsername} from './authSlice';

const authApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    login: builder.mutation({
      query: ({credential}) => ({
        url: '/login',
        method: 'POST',
        body: credential,
      }),
      async onQueryStarted({navigation}, {dispatch, getState, queryFulfilled}) {
        try {
          const response = await queryFulfilled;
          console.log('SUCCESS:', response.data);
          dispatch(SetToken(response.data.token));
          dispatch(SetUsername(response.data.user.name));
          navigation.replace('Home');
        } catch (error) {
          console.log('ERROR:', error.error.data);
        }
      },
    }),
    user: builder.query({
      query: () => '/user',
      async onQueryStarted(args, {queryFulfilled}) {
        try {
          const response = await queryFulfilled;
          console.log('SUCCESS:', response.data);
        } catch (error) {
          console.log('ERROR:', error.error.data);
        }
      },
    }),
    division: builder.query({
      query: () => '/getAllDivision',
    }),
    // departments: null,
  }),
});

export const {useLoginMutation, useDivisionQuery, useUserQuery} = authApiSlice;
