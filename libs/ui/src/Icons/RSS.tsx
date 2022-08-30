import Template, { IconProps, defaultProps } from './Template';

const Hearts = (props: IconProps) => (
  <Template {...props}>
    <path
      d="M4 11.5C6.38695 11.5 8.67613 12.4482 10.364 14.136C12.0518 15.8239 13 18.1131 13 20.5M4 4.5C8.24346 4.5 12.3131 6.18571 15.3137 9.18629C18.3143 12.1869 20 16.2565 20 20.5M6 19.5C6 20.0523 5.55228 20.5 5 20.5C4.44772 20.5 4 20.0523 4 19.5C4 18.9477 4.44772 18.5 5 18.5C5.55228 18.5 6 18.9477 6 19.5Z"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Template>
);

Hearts.defaultProps = defaultProps;

export default Hearts;
