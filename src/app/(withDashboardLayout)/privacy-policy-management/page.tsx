'use client';
import dynamic from 'next/dynamic';
import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCreatePrivacyMutation, useGetPrivacyQuery } from '@/redux/features/docs/docsApi';

const JoditEditor = dynamic(() => import('jodit-react'), {
      ssr: false,
});

const PrivacyPolicy = () => {
      const { data: privacyData, isFetching } = useGetPrivacyQuery([]);
      const [createPrivacy] = useCreatePrivacyMutation();

      const [content, setContent] = useState<string | null>(null);

      useEffect(() => {
            if (privacyData && privacyData[0]?.content) {
                  setContent(privacyData[0].content);
            }
      }, [privacyData]);

      const config: any = {
            readonly: false,
            height: 600,
      };

      if (isFetching) {
            return <div>Loading...</div>;
      }

      const handlePolicyPrivacy = async () => {
            try {
                  const res = await createPrivacy({ content }).unwrap();
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
                  <Title level={4}>Privacy Policy</Title>
                  <JoditEditor
                        value={content || ''}
                        config={config}
                        onBlur={(newContent) => setContent(newContent)} // Update state on blur
                  />
                  <Flex style={{ justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button onClick={handlePolicyPrivacy} type="primary">
                              Save Changes
                        </Button>
                  </Flex>
            </div>
      );
};

export default PrivacyPolicy;
