
export type AuthFormConfig = {
    username: string,
    email: string,
    password: string,
    confirmPassword:string
}

type handlerType = (values:{})=> void 

export type propType = {
    formType: 'Login' | 'Sign up',
    initialValues: AuthFormConfig,
    submitHandler: handlerType
}
