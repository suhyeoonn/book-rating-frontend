"use client";

import React from "react";
import { RatingSelect } from "./rating-select";
import { useUpdateRating } from "../api/use-update-rating";

interface UpdateRatingProps {
  id: number;
  rating: number;
}

const UpdateRating = ({ id, rating }: UpdateRatingProps) => {
  const mutationUpdate = useUpdateRating();

  const changeRating = (value: string) => {
    mutationUpdate.mutate({ id, rating: +value });
  };

  return <RatingSelect rating={rating} changeCallback={changeRating} />;
};

export default UpdateRating;
