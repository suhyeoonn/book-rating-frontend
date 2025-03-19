import { bookQueries } from "@/entities/aladin";
import { useExploreStore } from "@/pages/explore/model/explore.store";
import { useQuery } from "@tanstack/react-query";

export const useBookFilter = () => {
  const { category, keyword } = useExploreStore((state) => state);

  const { data: booksByCategory, isFetching: isCategoryFetching } = useQuery(
    bookQueries.byCategory(category, keyword),
  );

  const { data: booksBySearch, isFetching: isSearchFetching } = useQuery(
    bookQueries.search(category, keyword),
  );

  return {
    books: booksBySearch || booksByCategory, // 검색 결과가 있으면 우선 사용
    isFetching: isSearchFetching || isCategoryFetching,
  };
};
