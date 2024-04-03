import type { FormEventHandler } from 'react';

import { Button } from '@/components/elements/button';
import { Heading } from '@/components/elements/heading';
import Stack from '@/components/elements/stack';
import { Input } from '@/components/modules/input';

interface QuestionProps {
  onNext: () => void;
  onChange: (e: string) => void;
  value?: string;
}

export const Question = ({ children, onNext }: Component<Pick<QuestionProps, 'onNext'>>) => {
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    // @ts-expect-errorts-ignore
    if (e.target.checkValidity()) {
      onNext();
    }
  };

  return <form onSubmit={handleFormSubmit}>{children}</form>;
};

export const SourceUrlQuestion = ({ onNext, value, onChange }: QuestionProps) => {
  return (
    <Question onNext={onNext}>
      <Stack>
        <Heading fontSize="l"> What is the URL of the page that wants to send requests?</Heading>
        <Input
          id="source_url"
          type="url"
          required
          placeholder="http://example.com"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Button $isFluid type="submit">
          Next
        </Button>
      </Stack>
    </Question>
  );
};
