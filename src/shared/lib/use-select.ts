import { useState } from "react";

export const useSelect = (value: string) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return { selectedValue, handleChange };
};
