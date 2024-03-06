import { StyledBreadcrumbItem, StyledBreadcrumbLink, StyledBreadcrumbsWrapper } from './breadcrumbs.styles';
import type { BreadcrumbsProps } from './breadcrumbs.types';

import { CaretRight } from '@/components/elements/icon';

export const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbsWrapper>
      {Array.isArray(links) &&
        links.length > 0 &&
        links.map((link, index) => {
          const isLast = links.length - 1 === index;
          return (
            <StyledBreadcrumbItem>
              <StyledBreadcrumbItem>
                <StyledBreadcrumbLink as={link.href ? 'a' : 'p'} $active={isLast} href={link.href ?? ''}>
                  {link.text}
                </StyledBreadcrumbLink>
                {!isLast && <CaretRight size={16} weight="fill" />}
              </StyledBreadcrumbItem>
            </StyledBreadcrumbItem>
          );
        })}
    </StyledBreadcrumbsWrapper>
  );
};
