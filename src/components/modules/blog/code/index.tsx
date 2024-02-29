import { Roboto_Mono } from 'next/font/google';

import { StyledBlogCodeContent, StyledBlogCodeTitleWrapper, StyledBlogCodeWrapper } from './code.styles';
import type { BlogCodeProps } from './code.types';

import { Text } from '@/components/elements/text';

const dmCodeFont = Roboto_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-code' });

export const BlogCode = ({ title, content }: BlogCodeProps) => {
  return (
    <StyledBlogCodeWrapper className={dmCodeFont.className}>
      <StyledBlogCodeTitleWrapper>
        <Text fontSize="m" fontWeight="bold" color="white">
          {title}
        </Text>
      </StyledBlogCodeTitleWrapper>
      <StyledBlogCodeContent>{content}</StyledBlogCodeContent>
    </StyledBlogCodeWrapper>
  );
};
