import { aladinQueries } from "@/entities/aladin";
import { bookQueries } from "@/entities/book/api";
import { useQuery } from "@tanstack/react-query";

export const useSectionList = () => {
  const { data: newItems } = useQuery(aladinQueries.newItems());
  const { data: bestseller } = useQuery(aladinQueries.bestseller());
  const { data: popular } = useQuery(bookQueries.popular());
  const { data: mostAdded } = useQuery(bookQueries.mostAdded());

  return {
    newItems,
    bestseller,
    popular,
    mostAdded,
  };
};
