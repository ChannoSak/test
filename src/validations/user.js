import * as yup from 'yup';

const userName = yup
    .string()
    .required('Username is required.')
    .min(1, 'Username should have atleast 5 characters.')
    .max(20, 'Username should have atmost 10 characters.')
    .matches(/^\w+$/, 'Should be alphanumeric.');

const firstName = yup
    .string()
    .required('First Name is required.')
    .min(1, 'First name should have atleast 3 characters.');

const lastName = yup
    .string()
    .required('Last name is required.')
    .min(1, 'Last name should have atleast 3 characters.');

const email = yup
    .string()
    .required('Email is required.')
    .email('This is invalid email.');

    const tel = yup
    .string()

    const password = yup
    .string()
    .required("Password is required.")
    .min(1, 'Password should have atleast 5 characters.')
    .max(20, 'Password should have atmost 10 characters.');

    export const UserRegisterationRules = yup.object().shape({
        password,
        firstName,
        lastName,
        email,
        tel
    });
    export const UserAuthenticationRules = yup.object().shape({
        email,
        password
    });