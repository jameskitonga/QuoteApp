import styled from "styled-components";
import LoginItems from "../Components/LoginItems";
import Nav from "../Components/Nav";

const LoginContainer = styled.div`
 background-color:#1746A2;
  height:100vh;
 background-size:cover;
 background-repeat:no-repeat;
 background-position:center;
 height:100vh;



`


const Login = () => {
    return (
        <LoginContainer>
            <Nav/>
            <LoginItems />

        </LoginContainer>
    )


}
export default Login;