import Template, { IconProps, defaultProps } from './Template';

interface HomeProps extends IconProps {
  variant: 'outline' | 'default';
}

const Home = (props: HomeProps) => (
  <Template {...props}>
    {props.variant === 'outline' && (
      <path
        d="M19 20.9999H5C4.73478 20.9999 4.48043 20.8946 4.29289 20.707C4.10536 20.5195 4 20.2651 4 19.9999V10.9999H1L11.327 1.61192C11.5111 1.4444 11.7511 1.35156 12 1.35156C12.2489 1.35156 12.4889 1.4444 12.673 1.61192L23 10.9999H20V19.9999C20 20.2651 19.8946 20.5195 19.7071 20.707C19.5196 20.8946 19.2652 20.9999 19 20.9999ZM13 18.9999H18V9.15692L12 3.70292L6 9.15692V18.9999H11V12.9999H13V18.9999Z"
        fill={props.color}
      />
    )}

    {props.variant === 'default' && (
      <path
        d="M20 19.9999C20 20.2651 19.8946 20.5195 19.7071 20.707C19.5196 20.8946 19.2652 20.9999 19 20.9999H5C4.73478 20.9999 4.48043 20.8946 4.29289 20.707C4.10536 20.5195 4 20.2651 4 19.9999V10.9999H1L11.327 1.61192C11.5111 1.4444 11.7511 1.35156 12 1.35156C12.2489 1.35156 12.4889 1.4444 12.673 1.61192L23 10.9999H20V19.9999ZM11 12.9999V18.9999H13V12.9999H11Z"
        fill={props.color}
      />
    )}
  </Template>
);

Home.defaultProps = { ...defaultProps, variant: 'default' };

export default Home;
