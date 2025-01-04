import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { Input } from "@/shared/ui/input";
import { useDebounce } from "@frontend-opensource/use-react-hooks";

interface DebounceInputProps extends InputHTMLAttributes<HTMLInputElement> {
  changeCallback: (text: string) => void;
}

const DebounceInput = ({ changeCallback, ...props }: DebounceInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    debounceSearchText(newValue);
  };

  const debounceSearchText = useDebounce((text: string) => {
    changeCallback(text);
  }, 200);

  return <Input type="search" onChange={handleChange} {...props} />;
};

export default DebounceInput;
