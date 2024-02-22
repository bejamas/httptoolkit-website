import { BadgeWrapper } from './badge.styles';
import type { BadgeProps } from './badge.types';

export const Badge = async ({ children, additionalText, icon: Icon, iconWeight = 'fill' }: Component<BadgeProps>) => {
  console.log('icon', Icon);
  return (
    <BadgeWrapper>
      {additionalText}
      <Badge>
        {Icon && <Icon size={16} weight={iconWeight} />}
        {children}
      </Badge>
    </BadgeWrapper>
  );
};
