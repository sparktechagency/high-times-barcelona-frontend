import { backendUrl } from '@/redux/base/baseApi';

export const getImageUrl = (url?: string | null) => {
      if (!url) {
            return '/placeholder.png';
      }
      if (url.includes('http')) return url;
      return `${backendUrl}${url}`;
};
