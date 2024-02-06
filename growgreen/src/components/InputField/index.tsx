import TextField from '@mui/material/TextField';
// import * as S from './InputField.Style';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  required?: boolean;
}

function Index({
  label,
  type,
  name,
  value,
  onChange,
  autoFocus,
  required,
}: InputFieldProps) {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      required={required}
      sx={{
        color: '#292e41',
        fontSize: '20px',
        fontFamily: 'Pretendard-SemiBold',
        fontWeight: '400',
      }}
    />
  );
}

export default Index;

Index.defaultProps = {
  autoFocus: 'some default',
  required: 'some default',
};
