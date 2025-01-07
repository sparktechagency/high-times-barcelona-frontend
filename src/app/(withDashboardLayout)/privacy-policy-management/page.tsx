'use client';
import dynamic from 'next/dynamic';
import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';

const JoditEditor = dynamic(() => import('jodit-react'), {
      ssr: false,
});

const PrivacyPolicy = () => {
      const [content, setContent] = useState<string>('');

      const config: any = {
            readonly: false,
            height: 600,
      };

      return (
            <div>
                  <Title level={4}>Privacy Policy</Title>
                  <JoditEditor
                        value={content}
                        config={config}
                        onBlur={(newContent) => setContent(newContent)} // Update state on blur
                  />
                  <Flex style={{ justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button type="primary">Save Changes</Button>
                  </Flex>
            </div>
      );
};

export default PrivacyPolicy;
