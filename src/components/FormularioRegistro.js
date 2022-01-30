import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import { Card } from "react-bootstrap";
import * as Yup from "yup";
import Swal from 'sweetalert2';

export const Formularioregistro = ({air}) => {
  const regexFirstName = new RegExp("^[a-zA-Z ]+$");
  const regexPhone = new RegExp("^[0-9]+$");
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      edad: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(
          regexFirstName,
          "Nombre Invalido, no incluir numeros ni caracteres especiales"
        )
        .required("Por favor Ingrese su Nombre completo"),
      phone: Yup.string()
        .matches(regexPhone, "Numero invalido, Solo se aceptan numeros")
        .required("Por favor Ingrese su Numero Celular"),
      email: Yup.string().required(
        "Por favor ingrese su Email"
      ).email("Por favor Ingrese un Email Invalido"),
      edad: Yup.number().required("Por Favor Ingrese Su Edad").min(18,"Edad Mayor a 18 y Menor a 100 años").max(100,"Edad Mayor a 18 y Menor a 100 años"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
        showConfirmButton: false,
        timer: 5000
      })
      formik.resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="d-flex justify-content-center"
    >
      <Card className="w-50 movile">
        <Card.Header>
          <Link to="/">
            <Icon icon="akar-icons:arrow-back-thick" height="50" />
          </Link>
        </Card.Header>
        <div className="m-2">
          <h6>
            Hola, bienvenido, sabemos que quieres viajar en <b>{air}</b>, por favor diligencia el siguiente
            formulario.
          </h6>
        </div>
        <Card.Body>
          <label htmlFor="firstName">
            <b>Nombre Completo:</b>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email &&formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="phone">
            <b>Celular:</b>
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            {...formik.getFieldProps('phone')}
            
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}

          <label htmlFor="edad">
            <b>Edad:</b> (Desde los 18 hasta los 100 años){" "}
          </label>
          <input
            id="edad"
            name="edad"
            type="text"
            max={100}
            min={18}
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.edad}
            onBlur={formik.handleBlur}
            {...formik.getFieldProps('edad')}
          />
          {formik.touched.edad && formik.errors.edad ? (
            <div className="error">{formik.errors.edad}</div>
          ) : null}
          <div className="mt-3 d-flex">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
