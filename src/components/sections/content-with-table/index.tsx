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
  content: Content,
  links,
  richContent,
  $bgVariant = 'inkBlack',
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
            {Content && <RichText content={Content} />}
            {richContent && richContent}
          </StyledContentRichText>
        </StyledContentWithTableContentWrapper>
      </Container>
    </StyledContentWithTableWrapper>
  );
};
