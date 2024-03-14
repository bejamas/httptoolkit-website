import { StyledPoliciesUL } from './policies.styles';
import { defaultComponents } from '../default';

export const policiesComponents = {
  ...defaultComponents,
  ul({ children }: Component) {
    return <StyledPoliciesUL>{children}</StyledPoliciesUL>;
  },
};
