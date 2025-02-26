'use client';
import dynamic from 'next/dynamic';
import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateTermsMutation, useGetTermsQuery } from '@/redux/features/docs/docsApi';

const JoditEditor = dynamic(() => import('jodit-react'), {
      ssr: false,
});

const TermsAndCondition = () => {
      const { data: termsData, isFetching } = useGetTermsQuery([]);
      const [createTerms] = useCreateTermsMutation();

      const [content, setContent] = useState<string | null>(null);

      useEffect(() => {
            if (termsData && termsData[0]?.content) {
                  setContent(termsData[0].content);
            }
      }, [termsData]);

      const config: any = {
            readonly: false,
            height: 600,
      };

      if (isFetching) {
            return <div>Loading...</div>;
      }

      const handleTerms = async () => {
            try {
                  const res = await createTerms({ content }).unwrap();
                  if (res.success) {
                        toast.success(res.message);
                  }
            } catch (error: any) {
                  console.log(error);
                  toast.error(error?.data?.message);
            }
      };

      return (
            <div>
                  <Title level={4}>Terms & Conditions</Title>
                  <JoditEditor
                        value={content || ''}
                        config={config}
                        onBlur={(newContent) => setContent(newContent)} // Update state on blur
                  />
                  <Flex style={{ justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button onClick={handleTerms} type="primary">
                              Save Changes
                        </Button>
                  </Flex>
            </div>
      );
};

export default TermsAndCondition;
