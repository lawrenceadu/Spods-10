import Template, { IconProps, defaultProps } from './Template';

const Podcast = (props: IconProps) => (
  <Template {...props}>
    <path
      d="M17.1189 18.5C19.4623 16.9151 21 14.2779 21 11.285C21 6.4333 16.9704 2.5 12 2.5C7.02958 2.5 3 6.4333 3 11.285C3 14.2779 4.53771 16.9151 6.88113 18.5M8.35967 14.5C7.51875 13.65 7 12.5086 7 11.2505C7 8.62711 9.23881 6.5 12 6.5C14.7612 6.5 17 8.62711 17 11.2505C17 12.5095 16.4813 13.65 15.6403 14.5M12 22.5C10.8954 22.5 10 21.6046 10 20.5V18.5C10 17.3954 10.8954 16.5 12 16.5C13.1046 16.5 14 17.3954 14 18.5V20.5C14 21.6046 13.1046 22.5 12 22.5ZM13 11.5C13 12.0523 12.5523 12.5 12 12.5C11.4477 12.5 11 12.0523 11 11.5C11 10.9477 11.4477 10.5 12 10.5C12.5523 10.5 13 10.9477 13 11.5Z"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Template>
);

Podcast.defaultProps = defaultProps;

export default Podcast;
