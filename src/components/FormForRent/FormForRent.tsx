"use client";

import './FormForRent.scss'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputForForm from "@/shared/InputForForm/InputForForm";
import TextAreaForForm from "@/shared/TextAreaForForm/TextAreaForForm";

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  startDate: string;
  endDate: string;
  peopleCount: string;
  message: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Введите ФИО"),
  phone: Yup.string().required("Введите телефон"),
  email: Yup.string().email("Некорректный email").required("Введите email"),
  startDate: Yup.date().required("Выберите дату начала"),
  endDate: Yup.date()
    .required("Выберите дату окончания")
    .min(Yup.ref("startDate"), "Дата окончания не может быть раньше даты начала"),
  peopleCount: Yup.number()
    .required("Введите количество человек")
    .min(1, "Минимум 1 человек"),
  message: Yup.string(),
});

export default function FormForRent() {
  const initialValues: FormValues = {
    fullName: "",
    phone: "",
    email: "",
    startDate: "",
    endDate: "",
    peopleCount: "",
    message: "",
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
        <Form className="form__component">
          <Field label="ФИО" name="fullName" component={InputForForm} required />
          <ErrorMessage name="fullName" component="div" className="error-message" />

          <Field label="Телефон" name="phone" type="tel" component={InputForForm} required />
          <ErrorMessage name="phone" component="div" className="error-message" />

          <Field label="Email" name="email" type="email" component={InputForForm} required />
          <ErrorMessage name="email" component="div" className="error-message" />

          <h5>Даты поездки:</h5>
          <p className='small-p'>От</p>
          <Field label="Дата поездки от" name="startDate" type="date" component={InputForForm} required />
          <ErrorMessage name="startDate" component="div" className="error-message" />

          <p className='small-p'>До</p>
          <Field label="Дата поездки до" name="endDate" type="date" component={InputForForm} required />
          <ErrorMessage name="endDate" component="div" className="error-message" />

          <h5>Кол-во человек:</h5>
          <Field label="Количество человек" name="peopleCount" type="number" component={InputForForm} required min="1" />
          <ErrorMessage name="peopleCount" component="div" className="error-message" />

          <Field label="Ваше сообщение" name="message" component={TextAreaForForm} rows={4} />
          <ErrorMessage name="message" component="div" className="error-message" />

          <button type="submit" className="submit-button">
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
}