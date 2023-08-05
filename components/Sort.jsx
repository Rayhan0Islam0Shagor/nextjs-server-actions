'use client';

import useCustomRouter from '@/hooks/useCustomRouter';

const Sort = () => {
  const { pushQuery, query } = useCustomRouter();

  return (
    <div>
      Sort{' '}
      <select
        value={query.sort || 'createAt'}
        onChange={(e) => pushQuery({ sort: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      >
        <option value="createAt">A - Z</option>
        <option value="-createAt">Z - A</option>
      </select>
    </div>
  );
};

export default Sort;
