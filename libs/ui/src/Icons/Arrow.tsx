import Template, { IconProps, defaultProps } from './Template';

interface ArrowProps extends IconProps {
  direction:
    | 'up'
    | 'down'
    | 'right'
    | 'left'
    | 'left-up'
    | 'right-up'
    | 'left-down'
    | 'right-down';
}

const Arrow = (props: ArrowProps) => (
  <Template {...props}>
    {props.direction === 'up' && (
      <path
        d="M13 7.828V20H11V7.828L5.63605 13.192L4.22205 11.778L12 4L19.778 11.778L18.364 13.192L13 7.828Z"
        fill={props.color}
      />
    )}

    {props.direction === 'down' && (
      <path
        d="M13 16.172L18.364 10.808L19.778 12.222L12 20L4.22205 12.222L5.63605 10.808L11 16.172V4H13V16.172Z"
        fill={props.color}
      />
    )}

    {props.direction === 'right' && (
      <path
        d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z"
        fill={props.color}
      />
    )}

    {props.direction === 'left' && (
      <path
        d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z"
        fill={props.color}
      />
    )}

    {props.direction === 'left-up' && (
      <path
        d="M9.414 8L18.021 16.607L16.607 18.021L8 9.414V17H6V6H17V8H9.414Z"
        fill={props.color}
      />
    )}

    {props.direction === 'right-up' && (
      <path
        d="M16.004 9.414L7.39703 18.021L5.98303 16.607L14.589 8H7.00403V6H18.004V17H16.004V9.414V9.414Z"
        fill={props.color}
      />
    )}

    {props.direction === 'left-down' && (
      <path
        d="M9 13.5899L17.607 4.98291L19.021 6.39691L10.414 15.0039H18V17.0039H7V6.00391H9V13.5889V13.5899Z"
        fill={props.color}
      />
    )}

    {props.direction === 'right-down' && (
      <path
        d="M14.5901 16.0039L5.98206 7.39691L7.39606 5.98291L16.0031 14.5889V7.00391H18.0031V18.0039H7.00306V16.0039H14.5901Z"
        fill={props.color}
      />
    )}
  </Template>
);

Arrow.defaultProps = defaultProps;

export default Arrow;
