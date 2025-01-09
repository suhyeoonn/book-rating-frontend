import * as React from "react";

import { cn } from "@/shared/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "block w-full rounded-md border border-input p-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm/6",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
