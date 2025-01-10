import React, { useState } from 'react';

const PopularTag = ({ setTags }: { setTags: React.Dispatch<React.SetStateAction<string | null>> }) => {
      const tags = ['New', 'Cannabis', 'Spain', 'Barcelona', 'Weed', 'Smoke'];
      const [selectedTag, setSelectedTag] = useState<string | null>(null);

      const handleTagClick = (tag: string) => {
            setSelectedTag(tag);
            setTags(tag);
      };

      return (
            <div className="bg-white rounded-lg shadow-sm p-6 border-t-[5px] border-t-primary mt-3">
                  <h2 className="text-2xl font-medium text-[#3F3F3F] mb-6">Popular Tag</h2>
                  <div className="flex flex-wrap gap-3">
                        {tags.map((tag, index) => (
                              <button
                                    onClick={() => handleTagClick(tag)}
                                    key={index}
                                    className={`px-4 py-2 rounded border text-[#3F3F3F] transition-all duration-300 ${
                                          selectedTag === tag
                                                ? 'bg-[#005125] text-white border-[#005125]'
                                                : 'border-gray-200 hover:bg-[#005125] hover:text-white hover:border-[#005125]'
                                    }`}
                              >
                                    {tag}
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default PopularTag;
