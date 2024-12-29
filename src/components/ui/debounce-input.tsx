import React, { ChangeEvent } from "react";
import { Input } from "@/shared/ui/input";
import { useDebounce } from "@frontend-opensource/use-react-hooks";

interface DebounceInputProps {
  changeCallback: (text: string) => void;
  placeholder?: string;
}

const DebounceInput = ({
  changeCallback,
  placeholder = "",
}: DebounceInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    debounceSearchText(newValue);
  };

  const debounceSearchText = useDebounce((text: string) => {
    changeCallback(text);
  }, 200);

  return (
    <Input
      type="search"
      placeholder={placeholder}
      className="flex-1 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 placeholder:text-sm "
      onChange={handleChange}
      autoFocus
    />
  );
};

export default DebounceInput;
