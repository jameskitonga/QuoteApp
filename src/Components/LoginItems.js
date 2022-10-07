import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";



const ContainerLogin = styled.div`
background-color:#5F9DF7;
width:40%;
margin:0 auto;
`
const LogInItems = styled.div`

margin:0 auto;
width:50%;

`
const LogIn = styled.div`
color:#1746A2;
`

const Logo = styled.h1`

text-align:center;
color:#1746A2;
`

const LoginEmailPasswardButton = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const LogInEmail = styled.input`
// margin:2em;
border:none;
outline:none;
border-bottom:1px solid blue;
color:blue;
background:none;
padding:1em 4em;

`
const LogPassword = styled.div`
display:flex;
align-items:center;
border:1px solid blue;
outline:none;
border-top:none;
border-left:none;
border-right:none;

`


const LogInPassword = styled.input`
padding:1em 4em;
border:none;
outline:none;
background:none;
color:white;
z-index:100;
border-bottom:1px solid blue;
`
const PasswordVisibility = styled.div`

// width:10%;
text-align:center;
`

const LogInButton = styled.button`
padding:.8em 4em;
font-weight:bold;
background:#1746A2;
color:#5F9DF7;
border-radius:6px;
border:none;
margin:1em;
  cursor:pointer;
  font-size:1rem;

`
const PasswordConfirm = styled.input`


`
const LogInCheckbox = styled.input``
const CheckboxParagraph = styled.div`
display:flex;
gap:1em;
justify-content:center;
`
const CheckboxText = styled.p`
font-family:san-serif;

`
const LogInText = styled.div`
display:flex; 
justify-content:space-between;
`
const LogInPassorwd = styled.p`
color:darkblue;
`
const ButtonText = styled.div`
display:flex;
justify-content:center;
gap:1em;
`
const Labels = styled.label``




const LoginItems = () => {
    const [visible, setvisible] = useState(false)
    const [confirm, setConfirm] = useState(false)








    return (

        <ContainerLogin>
            <LogInItems>
                <LogIn>
                    <Logo>Quote LoginForm</Logo>


                    <LoginEmailPasswardButton>


                        <LogInPassword type="Text" placeholder="Firstname" />

                        <LogInPassword type="Text" placeholder="Lastname" />


                        <LogInEmail type="email" placeholder="E-mail" style={{ color: 'white' }} />

                        <LogPassword>
                            <LogInPassword style={{ color: 'white' }} type={visible ? "text" : "password"} placeholder="password" />

                            <PasswordVisibility onClick={() => setvisible(prev => !prev)}>{visible ? <VisibilityIcon /> : <VisibilityOffIcon />} </PasswordVisibility>
                        </LogPassword>
                        <LogPassword>
                            <LogInPassword type={confirm ? "text" : "password"} placeholder="Confirm Password" />
                            <PasswordVisibility onClick={() => setConfirm(prev => !prev)}>{confirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </PasswordVisibility></LogPassword>
                        <LogInButton>LogIn</LogInButton>
                    </LoginEmailPasswardButton>


        </LogIn>
            </LogInItems>




        </ContainerLogin >


    )

}
export default LoginItems;
