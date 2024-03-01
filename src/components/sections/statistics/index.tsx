import { StyledStatisticsWrapper } from './stadistics.styles';
import type { StatisticsProps } from './stadistics.types';

import { GrowingNumbers } from '@/components/modules/growing-numbers';
import type { GrowingNumbersStat } from '@/components/modules/growing-numbers/growing-numbers.types';
import { HeadingBlock } from '@/components/modules/heading-block';
import { getGithubDownloadStats } from '@/lib/services/get-github-download-stats';

export const Statistics = async ({ title, text }: StatisticsProps) => {
  const downloads = await getGithubDownloadStats();

  const stats: GrowingNumbersStat[] = [
    {
      title: 'years in business',
      number: 7,
      isOver: true,
    },
    {
      title: 'app downloads',
      number: downloads,
      isOver: true,
    },
    {
      title: 'users across the world',
      number: 300850,
      isOver: true,
    },
    {
      title: 'awesome debugging tool',
      number: 1,
      isOver: false,
    },
  ];
  return (
    <StyledStatisticsWrapper>
      <HeadingBlock $align="left" title={title} text={text} />
      <GrowingNumbers stats={stats} />
    </StyledStatisticsWrapper>
  );
};
