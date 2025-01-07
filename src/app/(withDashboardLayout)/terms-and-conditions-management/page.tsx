'use client';
import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), {
      ssr: false,
});
import { useState } from 'react';

const TermsAndConditions = () => {
      const [content, setContent] = useState<string>('');

      const config: any = {
            readonly: false,
            height: 600,
      };

      return (
            <div>
                  <Title level={4}>Terms & Conditions</Title>
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

export default TermsAndConditions;
