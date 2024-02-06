import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledInput = styled(TextField)`
  & label {
    position: static;
    font-size: 14rem;
  }

  & label[data-shrink='true'] {
    color: var(--gray100);
    font-weight: 500;
  }

  & label + input {
    margin-top: 4rem;
  }

  & input {
    border: 1px solid var(--gray50);
    height: 48rem;
    font-size: 16rem;
    padding: 8rem 12rem;
    border-radius: 6rem;
    margin: 4rem 0 0;
  }

  & input:focus {
    border-color: var(--gray80);
  }
`;

interface IProp {
  label: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  helperText?: string | boolean;
  value?: string;
}

function Input({
  label,
  type,
  placeholder,
  onChange,
  error,
  helperText,
  value,
}: IProp) {
  return (
    <StyledInput
      label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      variant="standard"
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
      error={error}
      helperText={helperText}
    />
  );
}

export default Input;
