'use client';
import { useGetTermsQuery } from '@/redux/features/docs/docsApi';
import React from 'react';

const TermsAndCondition = () => {
      const { data: termsData, isFetching, isError } = useGetTermsQuery([]);
      if (isFetching) return <div>Loading...</div>;
      if (isError || !termsData[0]) {
            return (
                  <div className="container py-20">
                        <p className="text-center">
                              Could not find terms and conditions. Please contact the administrator to add it from the dashboard.
                        </p>
                  </div>
            );
      }

      return (
            <div className="container py-20">
                  <div dangerouslySetInnerHTML={{ __html: termsData[0].content }} />
            </div>
      );
};

export default TermsAndCondition;
