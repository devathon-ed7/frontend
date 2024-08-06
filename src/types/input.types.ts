export interface InputFieldProps {
  id?: string;
  label?: string;
  type?: string;
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
