import {useFormik} from 'formik'
import { propType }  from './AuthFormConfig'
import {
        FormControl,
        FormLabel,
        Input, 
        FormErrorMessage,
        chakra,
        Heading,
        Button,
        Link,
        Text,
        Flex
    } from '@chakra-ui/react'
import { AuthValidator } from './AuthValidator'
import {Link as routerlink} from 'react-router-dom'




export const AuthForm =  (prop:propType )=> {
    const {initialValues ,formType, submitHandler} = prop
    
    const formik = useFormik  ({
        initialValues,
        onSubmit:(values=> submitHandler(values)),
        validationSchema:AuthValidator(formType)
    })
    return (
        <chakra.form bg='brand.orange' p={['24px', '32px']}   
            borderRadius='20px' display='flex' flexDirection='column'
            rowGap='16px' w='100%' 
            onSubmit={formik.handleSubmit}   
        >
            <Heading as='h2' color='brand.black' fontFamily='brand'
             textAlign='center' fontSize='32px'
            >
                {formType}
            </Heading>
            <Flex flexDirection='column' rowGap='8px'>
               {
                formType==='Sign up' &&  
                <FormControl
                    display='flex' flexDirection='column' 
                    isInvalid={formik.errors.username!==undefined  && formik.touched.username}>

                    <Input type='text' focusBorderColor='brand.golden'
                     order='2'
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     name='username'
                     id='username'
                     value={formik.values.username}
                    />
                    <FormLabel order='1'>Username</FormLabel>  
                    <FormErrorMessage order='3'>
                       {formik.errors.username}
                    </FormErrorMessage>
               </FormControl>
               }

               <FormControl isInvalid={formik.errors.email!==undefined  && 
                formik.touched.email}
                display='flex' flexDirection='column' 
               >
                <Input type='email' focusBorderColor='brand.golden'
                    order='2'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name='email'
                    id='email'
                    value={formik.values.email}
                />
                <FormLabel order='1'>Email</FormLabel>
                <FormErrorMessage>
                    {formik.errors.email}
                </FormErrorMessage>
               </FormControl>
               <FormControl isInvalid={formik.errors.password!==undefined
                    && 
                    formik.touched.password}
                    display='flex' flexDirection='column'
               >                
                <Input type='password' focusBorderColor='brand.golden'
                    order='2'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name='password'
                    id='password'
                    value={formik.values.password}
                />
                <FormLabel order='1'>Password</FormLabel>
                <FormErrorMessage>
                    {formik.errors.password}
                </FormErrorMessage>
               </FormControl>
               {
                formType==='Sign up' &&  <FormControl 
                    isInvalid={formik.errors.confirmPassword!==undefined && 
                        formik.touched.confirmPassword}
                        display='flex' flexDirection='column'
                        
                > 
                <Input type='password' focusBorderColor='brand.golden'
                    order='2'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name='confirmPassword'
                    id='confirmPassword'
                    value={formik.values.confirmPassword}
                />
                <FormLabel order='1'>Confirm password</FormLabel> 
                <FormErrorMessage>
                   {formik.errors.confirmPassword}
               </FormErrorMessage>
               </FormControl>
               }
            </Flex>
            <Flex flexDirection='column' rowGap='8px' >
                <Button type='submit' bg='brand.golden'
                 color='brand.white'
                 colorScheme='brand.golden'
                 _hover={
                    {
                        opacity:'0.6'
                    }
                 }
                >
                        {
                            formType==='Sign up' ? 'Create an account'
                            :'Login in'
                        }
                </Button>
                <Link as= {routerlink} to= {formType ==='Sign up' ? '/login' : '/sign_up' }
                 textAlign='center' color='black' 
                    textDecoration='none'
                >
                    {
                        formType==='Sign up' ? 'Already have an account? '
                        :'Dont have an account ?'
                    }  
                    <Text color='brand.golden' textDecoration='underline'>
                    {
                        formType==='Sign up' ? 'Sign in':'Sign up'
                    }
                    </Text>
                </Link>
            </Flex>

        </chakra.form>
    )
}