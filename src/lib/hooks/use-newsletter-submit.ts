import type { FormEventHandler } from 'react';
import { useState } from 'react';

export const useNewsletterSubmit = (): [boolean, FormEventHandler<HTMLFormElement>] => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    setIsSuccess(true);

    setTimeout(
      () => {
        if (e.target instanceof HTMLFormElement) {
          e.target.reset();
        }
        setIsSuccess(false);
      },
      100 * 60 * 2,
    );
  };

  return [isSuccess, handleSubmit];
};
