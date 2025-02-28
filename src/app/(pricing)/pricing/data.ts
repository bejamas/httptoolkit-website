import type { PricingComparisonProps } from '@/components/sections/pricing/comparison/comparison.types';
import type { TextWithAccordionProps } from '@/components/sections/text-with-accordion/text-with-accordion.types';

export const comparisonPlans: PricingComparisonProps['plans'] = [
  {
    id: 'free',
    title: 'Hobbyist',
  },
  {
    id: 'pro',
    title: 'Professional',
  },
  {
    id: 'team',
    title: 'Team',
  },
];
export const planFeatures: PricingComparisonProps['features'] = [
  {
    title: 'Key features',
    items: [
      {
        title: 'Users',
        tooltip: 'Users example',
        checked: ['hobbyist', 'professional', 'team'],
      },
      {
        title: 'Users 1',
        tooltip: 'This is a tooltip',
        checked: ['hobbyist', 'team', 'professional'],
      },
    ],
  },
  {
    title: 'Debugging Tools',
    items: [
      {
        title: 'Multiple Filters',
        tooltip: 'Multiple Filters example',
        checked: ['professional', 'team'],
      },
      {
        title: 'Breakpoint',
        tooltip: 'This is a tooltip',
        checked: ['team', 'professional'],
      },
      {
        title: 'Breakpoint 2',
        tooltip: 'This is a tooltip',
        checked: ['team', 'professional'],
      },
      {
        title: 'Breakpoint 3',
        tooltip: 'This is a tooltip',
        checked: ['team', 'professional'],
      },
    ],
  },
  {
    title: 'Integrations',
    items: [
      {
        title: 'Android',
        tooltip: 'This is a tooltip',
        checked: ['team', 'professional'],
      },
      {
        title: 'Javascript',
        tooltip: 'This is a tooltip',
        checked: ['team', 'professional'],
      },
      {
        title: 'Java',
        tooltip: 'This is a tooltip',
        checked: ['team', 'professional'],
      },
    ],
  },
];

export const FAQItems: TextWithAccordionProps['accordionItems'] = [
  {
    title: 'What are the subscription options?',
    text: 'Remember that the goal is to create a user-friendly and informative experience that guides visitors toward making a confident purchase decision. Regularly update product pages with accurate information and monitor user behavior to make continuous improvements.',
  },
  {
    title: 'What payment methods are available?',
    text: 'Remember that the goal is to create a user-friendly and informative experience that guides visitors toward making a confident purchase decision. Regularly update product pages with accurate information and monitor user behavior to make continuous improvements.',
  },
  {
    title: 'How can I manage my subscription?',
    text: 'Remember that the goal is to create a user-friendly and informative experience that guides visitors toward making a confident purchase decision. Regularly update product pages with accurate information and monitor user behavior to make continuous improvements.',
  },
  {
    title: 'How can you make my data secure?',
    text: 'Remember that the goal is to create a user-friendly and informative experience that guides visitors toward making a confident purchase decision. Regularly update product pages with accurate information and monitor user behavior to make continuous improvements.',
  },
  {
    title: 'Can I get a trial?',
    text: 'Remember that the goal is to create a user-friendly and informative experience that guides visitors toward making a confident purchase decision. Regularly update product pages with accurate information and monitor user behavior to make continuous improvements.',
  },
];
