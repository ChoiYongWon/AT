import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: any) => {
    setValue(event.target.value);
  };
  return { value, setValue, onChange };
};
