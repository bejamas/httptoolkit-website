'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';

import { MethodQuestion, MixedContentResult, NotCorsResult, SourceUrlQuestion, TargetUrlQuestion } from './components';
import type { WillItCorsSteps } from '../../data';
import { WillItCorsStore } from '../../store';

const steps = new WillItCorsStore();

export const Steps = observer(({ currentStep }: { currentStep: WillItCorsSteps }) => {
  const router = useRouter();

  switch (currentStep) {
    case 'source-url':
      return (
        <SourceUrlQuestion
          value={steps.sourceUrl}
          onChange={newValue => {
            steps.setSourceUrl(newValue);
          }}
          onNext={() => router.push('./target-url')}
        />
      );

    case 'target-url':
      return (
        <TargetUrlQuestion
          value={steps.targetUrl}
          onChange={newValue => {
            steps.setTargetUrl(newValue);
          }}
          onNext={() => {
            if (!steps.isCorsRequest) {
              router.push('./not-cors');
            } else if (steps.isMixedContentRequest) {
              router.push('./mixed-content');
            } else {
              router.push('./method');
            }
          }}
        />
      );

    case 'not-cors':
      return <NotCorsResult origin={steps.sourceOrigin ?? 'https://'} />;

    case 'mixed-content':
      return (
        <MixedContentResult
          sourceOrigin={steps.sourceOrigin ?? 'https://'}
          targetOrigin={steps.targetOrigin ?? 'http://'}
        />
      );

    case 'method':
      return (
        <MethodQuestion
          value={steps.method}
          onChange={newValue => {
            steps.setMethod(newValue);
          }}
          onNext={() => router.push('./request-extras')}
          sourceOrigin={steps.sourceOrigin ?? 'https://'}
          targetOrigin={steps.targetOrigin ?? 'http://'}
        />
      );

    default:
      return null;
  }
});
