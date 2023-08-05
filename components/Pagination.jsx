'use client';

import useCustomRouter from '@/hooks/useCustomRouter';

const Pagination = ({ totalPages }) => {
  const newArray = [...Array(totalPages)].map((_, i) => i + 1);

  const { pushQuery, query } = useCustomRouter();
  console.log('🚀 ~ file: Pagination.jsx:9 ~ Pagination ~ query:', query);

  return (
    <div className="flex items-center justify-center my-8 space-x-2">
      {newArray.map((page) => {
        return (
          <button
            key={page}
            className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
              Number(query.page ? query.page : 1) === page
                ? 'bg-blue-600 text-white'
                : ''
            }`}
            onClick={() => pushQuery({ page })}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
