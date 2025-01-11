import { baseApi } from '@/redux/base/baseApi';
import { TQueryParams } from '@/types';

const memberApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getMembers: builder.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((item: TQueryParams) => {
                                    params.append(item.name, item.value);
                              });
                        }

                        return {
                              url: '/members',
                              method: 'GET',
                              params,
                        };
                  },
                  transformResponse: (response: any) => response.data,
                  providesTags: ['Member'],
            }),
            createClubMember: builder.mutation({
                  query: (data) => {
                        return {
                              url: '/members/create',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['Member'],
            }),
            deleteMember: builder.mutation({
                  query: (id) => {
                        return {
                              url: `/members/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['Member'],
            }),
      }),
});

export const { useGetMembersQuery, useCreateClubMemberMutation, useDeleteMemberMutation } = memberApi;
