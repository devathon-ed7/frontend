export interface InputFieldProps {
  id: string;
  type: string;
  title: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}
