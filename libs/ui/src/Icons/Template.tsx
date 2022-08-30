import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size: number | string | undefined;
  color: string;
}

export const defaultProps = {
  size: 24,
  color: '#000',
};

const Template = ({ size, color, children, ...props }: IconProps) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

Template.defaultProps = defaultProps;

export default Template;
