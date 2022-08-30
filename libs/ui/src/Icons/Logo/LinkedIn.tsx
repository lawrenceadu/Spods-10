import { Fragment } from 'react';
import Template, { IconProps, defaultProps } from '../Template';

interface LinkedInProps extends IconProps {
  variant: 'outline' | 'default';
}

const LinkedIn = (props: LinkedInProps) => (
  <Template {...props}>
    {props.variant === 'outline' && (
      <Fragment>
        <g clipPath="url(#clip0_1_5282)">
          <path
            d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM5 5V19H19V5H5ZM7.5 9C7.10218 9 6.72064 8.84196 6.43934 8.56066C6.15804 8.27936 6 7.89782 6 7.5C6 7.10218 6.15804 6.72064 6.43934 6.43934C6.72064 6.15804 7.10218 6 7.5 6C7.89782 6 8.27936 6.15804 8.56066 6.43934C8.84196 6.72064 9 7.10218 9 7.5C9 7.89782 8.84196 8.27936 8.56066 8.56066C8.27936 8.84196 7.89782 9 7.5 9ZM6.5 10H8.5V17.5H6.5V10ZM12 10.43C12.584 9.865 13.266 9.5 14 9.5C16.071 9.5 17.5 11.179 17.5 13.25V17.5H15.5V13.25C15.5 12.7859 15.3156 12.3408 14.9874 12.0126C14.6592 11.6844 14.2141 11.5 13.75 11.5C13.2859 11.5 12.8408 11.6844 12.5126 12.0126C12.1844 12.3408 12 12.7859 12 13.25V17.5H10V10H12V10.43Z"
            fill={props.color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_5282">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </Fragment>
    )}

    {props.variant === 'default' && (
      <Fragment>
        <g clipPath="url(#clip0_1_5414)">
          <path
            d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
            fill={props.color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_5414">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </Fragment>
    )}
  </Template>
);

LinkedIn.defaultProps = { ...defaultProps, variant: 'default' };

export default LinkedIn;