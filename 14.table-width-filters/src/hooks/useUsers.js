import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../services/users'

export const useUsers = () => {
  const {
    isLoading,
    isError,
    data,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(
    ['users'],
    fetchUsers,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor
    }
  )

  return {
    refetch,
    fetchNextPage,
    isLoading,
    isError,
    users: data?.pages.flatMap(page => page.users) ?? [],
    hasNextPage
  }
}
