"use client";

import './TextAreaForForm.scss'
import { FieldProps } from "formik";

interface TextareaProps extends FieldProps {
  label: string;
}

export default function TextAreaForForm({ label, field, form, ...props }: TextareaProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div className="textarea__shared">
      <textarea
        placeholder={label}
        {...field}
        {...props}
      />
    </div>
  );
}
