'use client';

import useCustomRouter from '@/hooks/useCustomRouter';

const SearchForm = () => {
  const { pushQuery, query } = useCustomRouter();

  const handleSearch = async (formData) => {
    const search = formData.get('search');

    pushQuery({ search, page: 1 });
  };

  return (
    <form className="flex items-center space-x-4" action={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        defaultValue={query.search || ''}
      />

      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
