import { useState } from "react";

type Option = {
  lower: boolean;
}

export const useInput = (initialValue: string, option?: Option) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: any) => {
    let value = event.target.value as string
    if(option?.lower) value = value.toString().toLowerCase()
    setValue(value);
  };
  return { value, setValue, onChange };
};
