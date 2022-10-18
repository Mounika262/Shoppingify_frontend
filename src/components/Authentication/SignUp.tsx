import { chakra } from "@chakra-ui/react"
import { AuthForm } from "./AuthForm"

export const SignUp = ()=> {
    const initialValues= {
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const submitHandler = (values:{})=> {
        console.log(values)
    } 
    
    return (
        <chakra.section display='flex' 
            flexDirection='row' alignItems='center'
            justifyContent='center'
            px={{base:'24px' ,md:'100px' ,  lg:'300px', xl:'400px'}}
        >   
            <AuthForm formType="Sign up"
                initialValues={initialValues}
                submitHandler={submitHandler}
            />
        </chakra.section>
    )
}