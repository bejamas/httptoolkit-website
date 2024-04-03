'use client';

import { SourceUrlQuestion } from './components';

export const Steps = ({ currentStep }: { currentStep: string }) => {
  if (currentStep === 'source-url') {
    return (
      <SourceUrlQuestion
        value={'example.com'}
        onChange={newValue => {
          console.log(newValue);
        }}
        onNext={() => console.log('next -> ./target-url')}
      />
    );
  }

  return null;
};
