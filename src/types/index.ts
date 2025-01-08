export type TApiResponse<T> = {
      data: T;
      message: string;
      success: boolean;
};
export type TApiResponseWithMeta<T> = {
      data: {
            result: T;
            meta: {
                  page: number;
                  limit: number;
                  total: number;
                  totalPage: number;
            };
      };
      message: string;
      success: boolean;
};

export type TQueryParams = {
      name: string;
      value: string;
};
