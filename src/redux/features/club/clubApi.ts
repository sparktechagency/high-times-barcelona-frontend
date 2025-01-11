import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse } from '@/types';
export interface TClub {
      _id: string;
      location: Location;
      name: string;
      description: string;
      image: string;
      memberShipFee: number;
      ageLimit: number;
      rating: number;
      address: string;
      openingHour: string;
      closingHour: string;
      openDay: string;
      isApproved: boolean;
      isOpen: boolean;
}

export interface Location {
      latitude: number;
      longitude: number;
}
const clubApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getClubs: builder.query({
                  query: () => {
                        return {
                              url: '/clubs',
                              method: 'GET',
                        };
                  },
                  providesTags: ['Club'],
                  transformResponse: (response: TApiResponse<TClub[]>) => response.data,
            }),

            getApprovedClubs: builder.query({
                  query: () => {
                        return {
                              url: '/clubs/approved',
                              method: 'GET',
                        };
                  },
                  providesTags: ['Club'],
                  transformResponse: (response: TApiResponse<TClub[]>) => response.data,
            }),

            getSingleClub: builder.query({
                  query: (id) => {
                        return {
                              url: `/clubs/${id}`,
                              method: 'GET',
                        };
                  },
                  providesTags: ['Club'],
                  transformResponse: (response: TApiResponse<TClub>) => response.data,
            }),
            createClub: builder.mutation({
                  query: (data) => {
                        return {
                              url: '/clubs/create',
                              method: 'POST',
                              body: data,
                        };
                  },
                  invalidatesTags: ['Club'],
            }),

            updateClub: builder.mutation({
                  query: (args) => {
                        return {
                              url: `/clubs/${args.id}`,
                              method: 'PATCH',
                              body: args.data,
                        };
                  },
                  invalidatesTags: ['Club'],
            }),
            deleteClub: builder.mutation({
                  query: (id) => {
                        return {
                              url: `/clubs/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['Club'],
            }),
      }),
});

export const {
      useGetClubsQuery,
      useCreateClubMutation,
      useUpdateClubMutation,
      useDeleteClubMutation,
      useGetApprovedClubsQuery,
      useGetSingleClubQuery,
} = clubApi;
