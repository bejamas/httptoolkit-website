import {
  StyledContentRichText,
  StyledContentWithTableContentWrapper,
  StyledContentWithTableLowerGradientWrapper,
  StyledContentWithTableTableWrapper,
  StyledContentWithTableUpperGradientWrapper,
  StyledContentWithTableWrapper,
} from './content-with-table.styles';
import type { ContentWithTableProps } from './content-with-table.type';
import { RichText } from '../rich-text';

import { Container } from '@/components/elements/container';
import { Gradient } from '@/components/elements/gradient';
import { TableContent } from '@/components/modules/table-content';

export const ContentWithTable = ({
  richTextContent: RichTextContent,
  links,
  parsedContent,
  additionalContent,
  $bgVariant = 'inkBlack',
  withIntroHeading = true,
}: ContentWithTableProps) => {
  return (
    <StyledContentWithTableWrapper $bgVariant={$bgVariant}>
      <StyledContentWithTableUpperGradientWrapper>
        <Gradient />
      </StyledContentWithTableUpperGradientWrapper>
      <StyledContentWithTableLowerGradientWrapper>
        <Gradient />
      </StyledContentWithTableLowerGradientWrapper>
      <Container>
        <StyledContentWithTableContentWrapper>
          <StyledContentWithTableTableWrapper>
            <TableContent isCollapsible={false} links={links} />
          </StyledContentWithTableTableWrapper>
          <StyledContentRichText>
            {withIntroHeading && <h2 title="introduction" id="intro" />}
            {RichTextContent && <RichText content={RichTextContent} />}

            {/* Content that is already parsed from remoteMDX */}
            {parsedContent}
            {additionalContent}
          </StyledContentRichText>
        </StyledContentWithTableContentWrapper>
      </Container>
    </StyledContentWithTableWrapper>
  );
};
