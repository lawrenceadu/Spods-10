import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
interface StyledProps {
  height?: number;
  radius?: number | string;
  bg?: string;
  color?: string;
  border?: string;
}

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    StyledProps {
  isValid?: boolean;
  type?: 'submit' | 'button';
  isSubmitting?: boolean;
}

const defaultProps = {
  height: 48,
  isValid: true,
  color: '#fff',
  type: 'button',
  isSubmitting: false,
  bg: 'var(--sp-green)',
  border: 'transparent',
  radius: '500px',
};

export function Button({ children, ...props }: ButtonProps) {
  return (
    <Wrapper
      disabled={(() => {
        if (!props.isValid) {
          return true;
        }

        if (props.isSubmitting) {
          return true;
        }

        return false;
      })()}
      {...props}
    >
      {props.isSubmitting ? 'Loading ....' : children}
    </Wrapper>
  );
}

/**
 * styles
 */
const Wrapper = styled('button').withConfig({
  shouldForwardProp: (props, defaultValidatorFn) =>
    !['height', 'width', 'radius', 'bg', 'color', 'border'].includes(props) &&
    defaultValidatorFn(props),
})<StyledProps>(({ color, radius, border, bg, height }) => ({
  color,
  height,
  borderColor: border,
  backgroundColor: bg,
  borderRadius: radius,
}));

Button.defaultProps = defaultProps;

export default Button;
