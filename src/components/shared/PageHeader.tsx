import React from 'react';

interface PageHeaderProps {
      title: string;

      subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
      return (
            <div className="page-header-bg min-h-[180px] flex items-center justify-center">
                  <h1 className="text-white text-[48px] font-semibold text-center">{title}</h1>
            </div>
      );
};

export default PageHeader;
