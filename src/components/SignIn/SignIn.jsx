import React from 'react'
import { Container, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormWrap,
    Icon,
    Form,
    FormLabel,
    FormButton,
    Text 
    } from './SigninElement'

const SignIn = () => {
    return (
        <>
           <Container>
               <FormWrap>
                  <Icon to="/">Yamughni</Icon>
                  <FormContent>
                     <Form action="/CompanyProfile">
                         <FormH1>Sign in To your Account</FormH1>
                         <FormLabel htmlFor='for'>Email</FormLabel>
                         <FormInput type='email' required />
                         <FormLabel htmlFor='for'>Password</FormLabel>
                         <FormInput type='password' required />
                         <FormButton type='submit'>Continue</FormButton>
                         <Text>Forgot Password ?</Text>
                         </Form> 
                    </FormContent> 
               </FormWrap>
            </Container> 
        </>
    )
}

export default SignIn
