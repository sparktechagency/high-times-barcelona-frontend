import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse, TApiResponseWithMeta, TQueryParams } from '@/types';

export interface TBlog {
      _id: string;
      title: string;
      description: string;
      image: string;
      tags: string[];
      createdAt: string;
}

const blogApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            createBlog: builder.mutation({
                  query: (data) => ({
                        url: '/blogs/create',
                        method: 'POST',
                        body: data,
                  }),
                  invalidatesTags: ['Blog'],
            }),

            getBlogs: builder.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((item: TQueryParams) => {
                                    params.append(item.name, item.value);
                              });
                        }
                        return {
                              url: '/blogs',
                              method: 'GET',
                              params,
                        };
                  },
                  providesTags: ['Blog'],
                  transformResponse: (response: TApiResponseWithMeta<TBlog[]>) => response.data,
            }),

            updateBlog: builder.mutation({
                  query: (args) => ({
                        url: `/blogs/${args.id}`,
                        method: 'PATCH',
                        body: args.data,
                  }),
                  invalidatesTags: ['Blog'],
            }),

            deleteBlog: builder.mutation({
                  query: (id) => ({
                        url: `/blogs/${id}`,
                        method: 'DELETE',
                  }),
                  invalidatesTags: ['Blog'],
            }),
      }),
});

export const { useCreateBlogMutation, useGetBlogsQuery, useUpdateBlogMutation, useDeleteBlogMutation } = blogApi;
