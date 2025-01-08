import { baseApi } from '@/redux/base/baseApi';

const docsApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getTerms: build.query({
                  query: () => ({
                        url: '/terms-and-conditions',
                        method: 'GET',
                  }),
                  transformResponse: (response: any) => response.data,
            }),

            createTerms: build.mutation({
                  query: (data) => ({
                        url: '/terms-and-conditions/create',
                        method: 'POST',
                        body: data,
                  }),
            }),

            getPrivacy: build.query({
                  query: () => ({
                        url: '/privacy-policy',
                        method: 'GET',
                  }),
                  transformResponse: (response: any) => response.data,
            }),

            createPrivacy: build.mutation({
                  query: (data) => ({
                        url: '/privacy-policy/create',
                        method: 'POST',
                        body: data,
                  }),
            }),
      }),
});

export const { useGetTermsQuery, useCreateTermsMutation, useGetPrivacyQuery, useCreatePrivacyMutation } = docsApi;
