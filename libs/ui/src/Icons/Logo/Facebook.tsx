import { Fragment } from 'react';
import Template, { IconProps, defaultProps } from '../Template';

interface FacebookProps extends IconProps {
  variant: 'outline' | 'default';
}

const Facebook = (props: FacebookProps) => (
  <Template {...props}>
    {props.variant === 'outline' && (
      <Fragment>
        <g clipPath="url(#clip0_1_5046)">
          <path
            d="M14 19H19V5H5V19H12V14H10V12H12V10.346C12 9.009 12.14 8.524 12.4 8.035C12.6561 7.55119 13.052 7.15569 13.536 6.9C13.918 6.695 14.393 6.572 15.223 6.519C15.552 6.498 15.978 6.524 16.501 6.599V8.499H16C15.083 8.499 14.704 8.542 14.478 8.663C14.3431 8.73236 14.2334 8.84215 14.164 8.977C14.044 9.203 14 9.427 14 10.345V12H16.5L16 14H14V19ZM4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
            fill={props.color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_5046">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </Fragment>
    )}

    {props.variant === 'default' && (
      <Fragment>
        <g clipPath="url(#clip0_1_4766)">
          <path
            d="M15.402 21V14.034H17.735L18.084 11.326H15.402V9.598C15.402 8.814 15.62 8.279 16.744 8.279H18.178V5.857C17.4838 5.78334 16.7861 5.74762 16.088 5.75C14.021 5.75 12.606 7.012 12.606 9.33V11.326H10.268V14.034H12.606V21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H15.402Z"
            fill={props.color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_4766">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </Fragment>
    )}
  </Template>
);

Facebook.defaultProps = { ...defaultProps, variant: 'default' };

export default Facebook;
