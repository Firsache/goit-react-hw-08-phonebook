import { Label, Span, Input } from 'components/ContactForm/ContactForm.styled';
import { useField } from 'formik';
// import { BsEnvelope, BsKey } from 'react-icons/bs';

export const TextField = ({ label, ...otherProps }) => {
  const [field, meta] = useField(otherProps);
  return (
    <Label>
      <Span>{label}</Span>
      {/* <BsEnvelope size={15} className="icon" /> */}
      <Input {...field} {...otherProps} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Label>
  );
};
