import React, { useState} from 'react';

interface Props {
  onSearch: (query: string) => void;
}

export const SearchHeader: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="border-b border-gray-800 p-4">
        <div className="flex justify-between items-center">
            <div className="text-gray-600 font-bold text-xl">GameDashboard</div>
              <div className="p-2 flex items-center border border-gray-800 rounded-full">
                  
                  <form onSubmit={handleSubmit} className='flex items-center'>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="ml-4 w-full outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">
                      <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2" />
                        <circle cx="10" cy="10" r="8" />
                      </svg>
                    </button>
                  </form>
              </div>
        </div>
    </nav>
  );
};
