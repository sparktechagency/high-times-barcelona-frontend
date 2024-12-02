import React from 'react';

interface PageHeaderProps {
      title: string;

      subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
      return (
            <div className="page-header-bg">
                  <h1 className="text-white">{title}</h1>
            </div>
      );
};

export default PageHeader;
