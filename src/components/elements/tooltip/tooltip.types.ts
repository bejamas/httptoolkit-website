export interface TooltipProps extends Component {
  text: string;
  // TODO: remove once the hook is implemented
  colorScheme: 'dark' | 'light';
}

export interface StyledTooltipContentProps {
  $colorScheme: TooltipProps['colorScheme'];
}
