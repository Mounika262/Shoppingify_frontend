import { chakra, Image, Box } from "@chakra-ui/react"
import { AuthForm } from "./AuthForm"
import image from "../../assets/loginbg.svg"

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
        flexDirection='row'
        > 
            <Box
                display={["None", "None", "None", "block"]}
                width = '55%'
            >
                <Image
                    width = '100%'
                    objectFit='cover'
                    src= {image}
                    alt='Dan Abramov'/>
            </Box>

            <Box
                width = {['100%', '100%','100%','45%']}
                display = 'flex'
                alignItems= 'center'
                justifyContent='center'
                px = {['24px', '24px', '100px' ,'50px']}
                >
                <AuthForm formType="Sign up"

                initialValues={initialValues}
                submitHandler={submitHandler}
                />
            </Box>
        

        </chakra.section>
    )
}