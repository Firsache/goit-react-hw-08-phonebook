import { Label, Span, Input } from 'components/ContactForm/ContactForm.styled';
import { useField } from 'formik';
import {
  BsEnvelope,
  BsKey,
  BsTelephonePlus,
  BsPersonPlus,
} from 'react-icons/bs';

export const TextField = ({ label, ...otherProps }) => {
  const [field, meta] = useField(otherProps);
  return (
    <Label>
      <Span>{label}</Span>
      {label === 'Name' && <BsPersonPlus size={15} className="icon" />}
      {label === 'Email' && <BsEnvelope size={15} className="icon" />}
      {label === 'Password' && <BsKey size={15} className="icon" />}
      {label === 'Number' && <BsTelephonePlus size={15} className="icon" />}
      <Input {...field} {...otherProps} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Label>
  );
};
