'use client';

import { TableContentTriggerComponent } from './table-content-trigger';
import { StyledTableContentItemLink, StyledTableContentSubitem } from '../table-content.styles';
import type { TableContentFixedProps, TableContentSubitem } from '../table-content.types';

import { Text } from '@/components/elements/text';

export const TableContentAccordionFixed = ({ link, hasSubItems }: TableContentFixedProps) => {
  const renderSubItems = (subItems: TableContentSubitem[]) => {
    return subItems.map(item => (
      <Text fontSize="m" fontWeight="bold" color="lightGrey" key={item.text}>
        <StyledTableContentSubitem href={item.href}>{item.text}</StyledTableContentSubitem>
        {item.subItems && renderSubItems(item.subItems)}
      </Text>
    ));
  };

  return (
    <>
      {link.text && (
        <StyledTableContentItemLink>
          <TableContentTriggerComponent text={link.text} href={link.href} />
        </StyledTableContentItemLink>
      )}

      {hasSubItems && link.subItems?.length && renderSubItems(link.subItems)}
    </>
  );
};
