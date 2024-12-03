import React from 'react';

const PopularTag = () => {
      const tags = ['New', 'Cannabis', 'Spain', 'Barcelona', 'Weed', 'Smoke'];

      return (
            <div className="bg-white rounded-lg shadow-sm p-6 border-t-[5px] border-t-[#005125] mt-3">
                  <h2 className="text-2xl font-medium text-[#3F3F3F] mb-6">Popular Tag</h2>
                  <div className="flex flex-wrap gap-3">
                        {tags.map((tag, index) => (
                              <button
                                    key={index}
                                    className="px-4 py-2 rounded border border-gray-200 text-[#3F3F3F] hover:bg-[#005125] hover:text-white hover:border-[#005125] transition-all duration-300"
                              >
                                    {tag}
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default PopularTag;
