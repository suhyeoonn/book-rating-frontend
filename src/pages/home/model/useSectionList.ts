import { aladinQueries } from "@/entities/aladin";
import { bookQueries } from "@/entities/book/api";
import { useQuery } from "@tanstack/react-query";

export const useSectionList = () => {
  const { data: newItems } = useQuery(bookQueries.newItems());
  const { data: bestseller } = useQuery(bookQueries.bestseller());
  const { data: popular } = useQuery(bookQueries.popular());
  const { data: mostAdded } = useQuery(bookQueries.mostAdded());

  return {
    newItems,
    bestseller,
    popular,
    mostAdded,
  };
};
