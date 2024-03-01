import { NumberIncreaser } from './component/number-increaser';
import {
  StyledGrowingNumberStatNumber,
  StyledGrowingNumbersStat,
  StyledGrowingNumbersStatsWrapper,
  StyledGrowingNumbersWrapper,
} from './growing-numbers.styles';
import type { GrowingNumbersProps } from './growing-numbers.types';

import { Text } from '@/components/elements/text';
import { HeadingBlock } from '@/components/modules/heading-block';

function convertToMax3DigitsWithSuffix(number: number): [number, string] {
  if (isNaN(number)) {
    return [0, ''];
  }

  if (number >= 1000000) {
    return [Number((number / 1000000).toFixed(0)), 'M'];
  } else if (number >= 1000) {
    return [Number((number / 1000).toFixed(0)), 'K'];
  } else {
    return [Number(number.toFixed(0)), ''];
  }
}

export const GrowingNumbers = ({ title, text, stats }: GrowingNumbersProps) => {
  return (
    <StyledGrowingNumbersWrapper>
      <HeadingBlock $align="left" title={title} text={text} />
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
    </StyledGrowingNumbersWrapper>
  );
};
