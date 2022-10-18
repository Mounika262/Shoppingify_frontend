import * as yup from 'yup'

export const AuthValidator = (formType:'Login' | 'Sign up')=>  {
    if (formType==='Login')  {
        return yup.object().shape({
            email:yup.string().required('Please provide your email').email('Invalid email'),
            password:yup.string().required('Enter your password to login')
        })
    }

    return yup.object().shape({
        email:yup.string().required('Email is required').email('Invalid email format'),
        username:yup.string().required('Username is required'),
        password:yup.string().required('Please set your password').matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password should contain atleat 1 uppercase, 1 lowercase, a number or a character'),
        confirmPassword:yup.string().required('Please confirm your password').oneOf([yup.ref('password'),null],'Password must match')
    })
}