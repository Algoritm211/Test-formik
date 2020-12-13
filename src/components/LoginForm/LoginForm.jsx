import React from "react";
import {Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useFormik} from 'formik';
import classes from './LoginForm.module.css'
import * as yup from 'yup'


const LoginForm = (props) => {

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Email is required')
      .min(3, 'Password should be of minimum 3 characters length')
      .required('Password is required')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      isRemembered: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // debugger
  return (
    <div className={ classes.LoginForm }>
      <form onSubmit={ formik.handleSubmit }>
        <div>
          <TextField
            fullWidth={ true }
            id="email"
            name="email"
            label="Email"
            value={ formik.values.email }
            onChange={ formik.handleChange }
            error={ formik.touched.email && Boolean(formik.errors.email) }
            helperText={ formik.touched.email && formik.errors.email }
            onBlur={ formik.handleBlur }
          />
        </div>
        <div>
          <TextField
            fullWidth={ true }
            id="password"
            name="password"
            label="Password"
            value={ formik.values.password }
            onChange={ formik.handleChange }
            error={ formik.touched.password && Boolean(formik.errors.password) }
            helperText={ formik.touched.password && formik.errors.password }
            onBlur={ formik.handleBlur }
          />
        </div>
        <div>
          <FormControlLabel control={
            <Checkbox
              id="isRemembered"
              name="isRemembered"
              checked={ formik.values.isRemembered }
              onChange={ formik.handleChange }
              color="primary"
            /> }
                            label="Remember me"/>
        </div>
        <div className={ classes.formButtons }>
          <Button variant="contained" color="primary" type={ 'submit' }>
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={ NavLink }
            to={ '/' }
          >
            Назад
          </Button>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
