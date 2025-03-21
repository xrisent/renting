"use client";

import './InputForForm.scss'
import { FieldProps } from "formik";

interface InputProps extends FieldProps {
  label: string;
}

export default function InputForForm({ label, field, form, ...props }: InputProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div className="input__shared error">
      <input
        placeholder={label}
        {...field}
        {...props}
      />
    </div>
  );
}
