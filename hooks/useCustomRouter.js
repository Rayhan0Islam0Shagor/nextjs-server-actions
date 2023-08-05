import { useRouter, useSearchParams } from 'next/navigation';

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = {};

  const search = searchParams.get('search');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');

  if (search) query.search = search;
  if (sort) query.sort = sort;
  if (page) query.page = page;

  const pushQuery = ({ search, sort, page }) => {
    if (search !== undefined) {
      search === '' ? delete query.search : (query.search = search);
    }

    if (sort !== undefined) {
      sort === 'createAt' ? delete query.sort : (query.sort = sort);
    }

    if (page !== undefined) {
      page === 1 ? delete query.page : (query.page = page);
    }

    const newQuery = new URLSearchParams(query).toString();

    router.push(`?${newQuery}`);
  };

  return {
    pushQuery,
    query,
  };
};

export default useCustomRouter;
