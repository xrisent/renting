"use client";

import './FormForRent.scss'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputForForm from "@/shared/InputForForm/InputForForm";
import TextAreaForForm from "@/shared/TextAreaForForm/TextAreaForForm";
import { FormValues } from '@/entities/formProps';
import { useTranslations } from 'next-intl'
import axios from 'axios';

export default function FormForRent() {
  
  const t = useTranslations("Form")

  const initialValues: FormValues = {
    fullName: "",
    phone: "",
    email: "",
    startDate: "",
    endDate: "",
    peopleCount: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required(t('fullNameError')),
    phone: Yup.string().required(t("phoneError")),
    email: Yup.string().email(t("emailError")).required(t("emailError")),
    startDate: Yup.date().required(t("startDateError")),
    endDate: Yup.date()
      .required(t("endDateError"))
      .min(Yup.ref("startDate"), t("endDateError")),
    peopleCount: Yup.number()
      .required(t("peopleCountError"))
      .min(1, t("peopleCountError")),
    message: Yup.string(),
  });


  const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      const response = await axios.post('/api/notify', JSON.stringify(values), {
        headers: { 'Content-Type': 'application/json' }
      });
  
      console.log('Form sent successfully:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error sending form:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <>
          <div className={`form-overlay ${isSubmitting ? 'visible' : ''}`}>
            {t('loading')}...
          </div>


          <Form className="form__component">
            <Field label={t('fullName')} name="fullName" component={InputForForm} required />
            <ErrorMessage name="fullName" component="div" className="error-message" />

            <Field label={t('phone')} name="phone" type="tel" component={InputForForm} required />
            <ErrorMessage name="phone" component="div" className="error-message" />

            <Field label={t('email')} name="email" type="email" component={InputForForm} required />
            <ErrorMessage name="email" component="div" className="error-message" />

            <h5>{t("date")}</h5>
            <p className='small-p'>{t('from')}</p>
            <Field label={t('startDate')} name="startDate" type="date" component={InputForForm} required />
            <ErrorMessage name="startDate" component="div" className="error-message" />

            <p className='small-p'>{t('to')}</p>
            <Field label={t('endDate')} name="endDate" type="date" component={InputForForm} required />
            <ErrorMessage name="endDate" component="div" className="error-message" />

            <h5>{t('peopleCount')}</h5>
            <Field label={t('peopleCount')} name="peopleCount" type="number" component={InputForForm} required min="1" />
            <ErrorMessage name="peopleCount" component="div" className="error-message" />

            <Field label={t('message')} name="message" component={TextAreaForForm} rows={4} />
            <ErrorMessage name="message" component="div" className="error-message" />

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {t('submit')}
            </button>
          </Form>
        </>
      )}
    </Formik>

  );
}