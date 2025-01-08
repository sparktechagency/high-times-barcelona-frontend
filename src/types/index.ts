export type TApiResponse<T> = {
      data: T;
      message: string;
      success: boolean;
};

export type TQueryParams = {
      name: string;
      value: string;
};
