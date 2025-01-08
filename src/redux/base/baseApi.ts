import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, setUser } from '../features/auth/authSlice';

const backendUrl = 'http://192.168.10.19:5001';
const baseQuery = fetchBaseQuery({
      baseUrl: `${backendUrl}/api/v1`,
      credentials: 'include',
      prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;

            if (token) {
                  headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
      },
});

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
      let result = await baseQuery(args, api, extraOptions);

      if (result?.error?.status === 401) {
            console.log('Sending refresh token');

            const res = await fetch(`${backendUrl}/auth/refresh-token`, {
                  method: 'POST',
                  credentials: 'include',
            });

            const data = await res.json();

            if (data?.data?.accessToken) {
                  const user = (api.getState() as RootState).auth.user;
                  api.dispatch(setUser({ user, token: data.data.accessToken }));

                  result = await baseQuery(args, api, extraOptions);
            } else {
                  api.dispatch(logout());
                  console.log('Session expired. Please log in again.');
            }
      }

      return result;
};

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: baseQueryWithRefreshToken,
      tagTypes: ['Auth'],
      endpoints: () => ({}),
});
