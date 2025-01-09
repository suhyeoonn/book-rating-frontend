"use client";

import React from "react";
import { RatingSelect } from "./rating-select";
import { useUpdateRating } from "../api/use-update-rating";

interface UpdateRatingProps {
  reviewId: number;
  rating: number;
}

export const UpdateRating = ({ reviewId, rating }: UpdateRatingProps) => {
  const mutationUpdate = useUpdateRating(reviewId);

  const changeRating = (value: string) => {
    mutationUpdate.mutate({ reviewId: reviewId, rating: +value });
  };

  return <RatingSelect rating={rating} changeCallback={changeRating} />;
};
