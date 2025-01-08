import { baseApi } from '@/redux/base/baseApi';
import { TApiResponseWithMeta, TQueryParams } from '@/types';
export interface TFaq {
      _id: string;
      question: string;
      answer: string;
      createdAt: string;
}

const faqApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getFaqs: builder.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((item: TQueryParams) => {
                                    params.append(item.name, item.value);
                              });
                        }

                        return {
                              url: '/faqs',
                              method: 'GET',
                              params,
                        };
                  },
                  providesTags: ['Faq'],
                  transformResponse: (response: TApiResponseWithMeta<TFaq[]>) => response.data,
            }),

            createFaq: builder.mutation({
                  query: (data) => ({
                        url: '/faqs/create',
                        method: 'POST',
                        body: data,
                  }),
                  invalidatesTags: ['Faq'],
            }),

            updateFaq: builder.mutation({
                  query: (args) => ({
                        url: `/faqs/${args.id}`,
                        method: 'PATCH',
                        body: args.data,
                  }),
                  invalidatesTags: ['Faq'],
            }),
            deleteFaq: builder.mutation({
                  query: (id) => ({
                        url: `/faqs/${id}`,
                        method: 'DELETE',
                  }),
                  invalidatesTags: ['Faq'],
            }),
      }),
});

export const { useGetFaqsQuery, useCreateFaqMutation, useUpdateFaqMutation, useDeleteFaqMutation } = faqApi;
