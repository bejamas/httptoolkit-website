import {
  StyledNewsletterContentWrapper,
  StyledNewsletterFormContentWrapper,
  StyledNewsletterFormWrapper,
  StyledNewsletterGradientWrapper,
  StyledNewsletterTitle,
  StyledNewsletterWrapper,
} from './newsletter.styles';
import type { NewsletterProps } from './newsletter.types';
import { Input } from '../input';

import { Button } from '@/components/elements/button';
import { Gradient } from '@/components/elements/gradient';
import { Text } from '@/components/elements/text';
import type { TextProps } from '@/components/elements/text/text.types';

export function Newsletter({
  $variant = 'default',
  title,
  text,
  supportText,
  buttonText = 'Sign up',
  action,
}: NewsletterProps) {
  const TextSize: TextProps['fontSize'] = $variant === 'blog-short' ? 'l' : 'm';
  const TextColor: TextProps['color'] = $variant === 'blog-short' ? 'white' : 'darkGrey';
  const SupportWeight: TextProps['fontWeight'] = $variant === 'with-gradient' ? 'bold' : 'normal';
  const SupportColor: TextProps['color'] = $variant === 'with-gradient' ? 'white' : 'darkGrey';

  return (
    <StyledNewsletterWrapper $variant={$variant}>
      {$variant !== 'default' && (
        <StyledNewsletterGradientWrapper $variant={$variant}>
          <Gradient $shape="full" />
        </StyledNewsletterGradientWrapper>
      )}
      <StyledNewsletterContentWrapper $variant={$variant}>
        <StyledNewsletterTitle $variant={$variant}>{title}</StyledNewsletterTitle>
        {text && (
          <Text fontSize={TextSize} color={TextColor} fontWeight="normal">
            {text}
          </Text>
        )}
      </StyledNewsletterContentWrapper>
      <StyledNewsletterFormContentWrapper $variant={$variant}>
        {$variant !== 'blog-short' && (
          <Text fontSize="m" color={SupportColor} fontWeight={SupportWeight}>
            {supportText}
          </Text>
        )}
        <StyledNewsletterFormWrapper $variant={$variant} method="POST" action={action} target="_blank">
          <div className="visually-hidden">
            <label htmlFor="extra-info">An extra form field you should ignore</label>
            <input type="text" id="extra-info" name="first-name" tab-index="-1" autoComplete="nope" />
          </div>
          <Input id="email" type="email" placeholder="Email address" />
          <Button $variant="secondary" $small type="submit">
            {buttonText}
          </Button>
        </StyledNewsletterFormWrapper>
      </StyledNewsletterFormContentWrapper>
    </StyledNewsletterWrapper>
  );
}
