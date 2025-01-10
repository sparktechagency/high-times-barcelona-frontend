import { baseApi } from '@/redux/base/baseApi';

const contactApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            sendContact: builder.mutation({
                  query: (data) => ({
                        url: '/contacts/create',
                        method: 'POST',
                        body: data,
                  }),
            }),

            subscribe: builder.mutation({
                  query: (data) => ({
                        url: '/subscribers/create',
                        method: 'POST',
                        body: data,
                  }),
            }),
      }),
});

export const { useSendContactMutation, useSubscribeMutation } = contactApi;
