import Template, { IconProps, defaultProps } from './Template';

const VoicePrint = (props: IconProps) => (
  <Template {...props}>
    <g clipPath="url(#clip0_1_6304)">
      <path
        d="M5 7H7V17H5V7ZM1 10H3V14H1V10ZM9 2H11V20H9V2ZM13 4H15V22H13V4ZM17 7H19V17H17V7ZM21 10H23V14H21V10Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_1_6304">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </Template>
);

VoicePrint.defaultProps = defaultProps;

export default VoicePrint;
