import { StyledStatisticsWrapper } from './stadistics.styles';
import type { StatisticsProps } from './stadistics.types';

import { GrowingNumbers } from '@/components/modules/growing-numbers';
import { HeadingBlock } from '@/components/modules/heading-block';

export const Statistics = ({ title, text }: StatisticsProps) => {
  return (
    <StyledStatisticsWrapper>
      <HeadingBlock $align="left" title={title} text={text} />
      <GrowingNumbers />
    </StyledStatisticsWrapper>
  );
};
