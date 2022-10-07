import Nav from "../Components/Nav";
import styled from "styled-components"
import HomeItems from "../Components/HomeItems";



const QuoteContainer = styled.div`
 background-color:#1746A2;
 height:100vh;


`

const Quotes = () => {
    return (
       
         <QuoteContainer>
            <Nav />
            <HomeItems/>
         </QuoteContainer> 

    )
    
}
export default Quotes;