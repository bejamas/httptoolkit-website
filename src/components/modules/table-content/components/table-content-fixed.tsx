'use client';

import { TableContentTriggerComponent } from './table-content-trigger';
import { StyledTableContentItemLink, StyledTableContentSubitem } from '../table-content.styles';
import type { TableContentFixedProps, TableContentSubitem } from '../table-content.types';

import { Text } from '@/components/elements/text';

export const TableContentAccordionFixed = ({ link, hasSubItems }: TableContentFixedProps) => {
  const renderSubItems = (subItems: TableContentSubitem[]) => {
    return subItems.map(item => {
      const isParent = item.subItems && item.subItems?.length > 0;
      return (
        <ul key={item.text} data-parent={isParent}>
          <li>
            <StyledTableContentSubitem href={item.href}>
              <Text
                as="span"
                fontSize="m"
                color={!isParent ? 'lightGrey' : 'white'}
                fontWeight={!isParent ? 'normal' : 'bold'}
              >
                {item.text}
              </Text>
            </StyledTableContentSubitem>
          </li>
          {item.subItems && renderSubItems(item.subItems)}
        </ul>
      );
    });
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
