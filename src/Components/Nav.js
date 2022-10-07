import styled from "styled-components";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
const NavContainer = styled.div`
background-color:#5F9DF7;
`
const NavItems = styled.ul`
display:flex;
gap:1em;
justify-content:space-between;
color:white;
list-style:none;
font-size:2rem;
font-family:san-serif;
font-weight:bold;


`
const NavList = styled.li``

const Navright = styled.div`

padding-left:6em;
`
const NavLeft = styled.div``
const PNav = styled.div`
display:flex;
justify-content:space-between;
width:80%


`

const Nav = () => {
    return (
        <NavContainer>
            <PNav>
                <Navright>
                    <NavItems>
                        <NavList><Link to="/">QUOTE APP</Link></NavList>
                    </NavItems>
                </Navright>
                <NavLeft>
                    <NavItems>

                        <NavList><Link to="/" >Add Quote</Link></NavList>
                        <NavList><Link to="/login" >Login</Link></NavList>
                        <NavList><Link to="/quote" >Prev Quotes</Link></NavList>
                    </NavItems>
                </NavLeft>
            </PNav>
        </NavContainer>



    )
}
export default Nav;