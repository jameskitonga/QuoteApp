import styled from "styled-components";
import AddedQuote from "../Components/AddedQuotes";
import Nav from "../Components/Nav";

const QuoteContainer = styled.div`

  background-color:#1746A2;


`


const Quote = () => {
    return (
        <QuoteContainer>
            <Nav />
            <AddedQuote/>

        </QuoteContainer>
    )


}
export default Quote;