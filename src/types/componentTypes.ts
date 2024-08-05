export interface NavItemProps {
  to: string;
  label: string;
  compact?: boolean;
  hasIcon?: boolean;
  children?: React.ReactNode;
}
