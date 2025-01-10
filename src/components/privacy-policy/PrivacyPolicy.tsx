'use client';
import { useGetPrivacyQuery } from '@/redux/features/docs/docsApi';
import React from 'react';

const PrivacyPolicy = () => {
      const { data: privacyData, isFetching, isError } = useGetPrivacyQuery([]);
      if (isFetching) return <div>Loading...</div>;
      if (isError || !privacyData[0]) {
            return (
                  <div className="container py-20">
                        <p className="text-center">
                              Could not find privacy policy. Please contact the administrator to add it from the dashboard.
                        </p>
                  </div>
            );
      }

      return (
            <div className="container py-20">
                  <div dangerouslySetInnerHTML={{ __html: privacyData[0].content }} />
            </div>
      );
};

export default PrivacyPolicy;
