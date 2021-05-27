import { useState } from 'react';

const useFlatForm = <T extends {}>(): [
  T,
  (fieldName: keyof T, value: any) => void,
  (state: T) => void
] => {
  const [state, setState] = useState<T>({} as T);

  const setInputState = (fieldName: keyof T, value: any) => {
    if (!fieldName) return;
    setState(_s => {
      return {
        ..._s,
        [fieldName!]: value,
      } as T;
    });
  };

  const setFormState = (data: T) => {
    setState(data);
  };

  return [state, setInputState, setFormState];
};

export default useFlatForm;
