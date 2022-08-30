import Template, { TemplateProps } from './Template';

export function Field({ children, ...props }: TemplateProps) {
  return <Template {...props}>{children}</Template>;
}

export default Object.assign(Field, {});
