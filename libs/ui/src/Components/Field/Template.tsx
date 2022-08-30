import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TemplateProps {
  name: string;
  label?: string | React.ReactNode;
  prefix?: React.ReactNode | string;
  postfix?: React.ReactNode | string;
  children?: React.ReactNode;
  disabled?: boolean;
  withFormik?: boolean;
  labelClassName?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  [x: string]: any;
}

interface InputContainerProps {
  disabled?: boolean;
}

export function Template({
  name,
  label,
  prefix,
  postfix,
  disabled,
  children,
  withFormik = true,
  labelClassName,
  wrapperClassName,
  containerClassName,
  ...props
}: TemplateProps) {
  return (
    <InputGroup className={wrapperClassName}>
      {label && (
        <InputLabel htmlFor={name} className={labelClassName}>
          {label}
        </InputLabel>
      )}
      <InputContainer
        disabled={disabled}
        className={containerClassName}
        {...props}
      >
        {prefix && prefix}
        {children}
        {postfix && postfix}
      </InputContainer>
    </InputGroup>
  );
}

/**
 * styles
 */
const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  padding: 1rem;
  align-items: center;
  border-radius: 0.25rem;
  background-color: var(--sp-gray-2);

  input,
  select,
  textarea {
    padding: 0;
    color: #fff;
    border: none;
    outline: none;
    background-color: transparent;

    ::placeholder {
      color: var(--sp-gray-1);
    }
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--sp-gray);
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export default Template;
