import { backendUrl } from '@/redux/base/baseApi';

export const getImageUrl = (url: string) => {
      if (url.includes('http')) return url;
      return `${backendUrl}${url}`;
};
