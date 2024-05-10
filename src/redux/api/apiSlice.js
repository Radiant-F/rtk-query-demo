import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SetToken} from '../../features/authentication/services/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dev.pondokdigital.pondokqu.id/api',
  prepareHeaders(headers, {getState}) {
    const token = getState().auth.token;
    headers.set('Content-Type', 'application/json');
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (
    result.data.status == 'Authorization Token not found' ||
    result.data.status == 'Token is Expired'
  ) {
    console.log('token expired. refreshing token...');
    const refreshResult = await baseQuery(
      {
        url: '/login',
        method: 'POST',
        body: {email: 'tester@gmail.com', password: 'rahasia123'},
      },
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      api.dispatch(SetToken(refreshResult.data.token));
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
