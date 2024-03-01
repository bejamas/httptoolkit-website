import { NumberIncreaser } from './component/number-increaser';
import {
  StyledGrowingNumberStatNumber,
  StyledGrowingNumbersStat,
  StyledGrowingNumbersStatsWrapper,
} from './growing-numbers.styles';
import type { GrowingNumbersStat } from './growing-numbers.types';

import { Text } from '@/components/elements/text';
import { getGithubDownloadStats } from '@/lib/services/get-github-download-stats';
import { convertToMax3DigitsWithSuffix } from '@/lib/utils/format3digitsAndSuffix';

export const GrowingNumbers = async () => {
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
    <StyledGrowingNumbersStatsWrapper>
      {Array.isArray(stats) &&
        stats.map(stat => {
          const [number, suffix] = convertToMax3DigitsWithSuffix(stat.number);
          return (
            <StyledGrowingNumbersStat>
              <StyledGrowingNumberStatNumber>
                {<NumberIncreaser maxValue={number} suffix={suffix} />}
                {stat.isOver && '+'}
              </StyledGrowingNumberStatNumber>
              <Text fontSize="l" color="darkGrey">
                {stat.title}
              </Text>
            </StyledGrowingNumbersStat>
          );
        })}
    </StyledGrowingNumbersStatsWrapper>
  );
};
