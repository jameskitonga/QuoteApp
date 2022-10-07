import React, { useEffect } from "react";
import styled from "styled-components"
import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase"



const QuoteContainer = styled.div`
margin:2em;
background-color:#5F9DF7;


`
const Container = styled.div`
// margin:0 auto;
`
const QuoteBox = styled.div`
width:50%;

margin:0 auto;
`

const QuoteText = styled.textarea`
margin:1em;
padding:3em;
border:3px solid blue;
`
const QuoteAuthor = styled.input`
padding:1em;
border-radius:6px;
border:3px solid blue;
`
const TextAthur = styled.div`


`
const QuoteButton = styled.button`
margin:1em;
text-align:center;
padding:1em 3em;
border-radius:6px;
background:#1746A2;
color:#5F9DF7;
font-weight:bold;

`
const InputContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:2em;
gap:1em;

`
const ButtonContainer = styled.div`
text-align:center;
`
const IconsBtn = styled.div`
display:flex;
justify-content:flex-end;
gap:1em;
`
const QouteInput = styled.div`
display:flex;
gap:1em;
`
const ParaMessage = styled.p``

const HomeItems = () => {


    const [Quoteinfo, setQuoteinfo] = useState(
        {
            Quote: "",
            Author: "",
            Posted: "",
            Date: new Date(),
        }
    )
    const [error, setError] = useState(
        {
            Quote: "",
            Author: "",
            Posted: ""
        }
    )


    const QuoteHandlers = async () => {
        try {
            if (Quoteinfo.Quote === "") {
                setError({ ...error, Quote: "please write Quote !!" })
            }
            if (Quoteinfo.Author === "") {
                setError({ ...error, Author: "please enter author !!" })
            }
            if (Quoteinfo.Posted === "") {
                setError({ ...error, Posted: "please write who posted it!!" })
            }
            else {
                await addDoc(collection(db, "Quote"), Quoteinfo)
                console.log("Quote added successfully")
                
            }
            
            setQuoteinfo({
                Quote: "",
                Author: "",
                Posted: "",
                Date:""
                // Date: new Date(),

            })

            console.log(Quoteinfo)

        }
        catch (error) {
            console.log("please try again", error)

        }
    }




    return (
        <Container>
            <QuoteContainer>
        <QuoteBox>

                <TextAthur>
                    
                    <ParaMessage>{error.Quote}</ParaMessage>
                    <QuoteText value={Quoteinfo.Quote} type="Text" placeholder="Type Your Quote" rows="5" cols="55" onChange={(e) => setQuoteinfo({
                        ...Quoteinfo, Quote: e.target.value
                    })} />
                        <QouteInput>
                            <InputContainer>
                        <ParaMessage>{error.Author}</ParaMessage>
                        <QuoteAuthor value={Quoteinfo.Author} type="Text" placeholder="Enter Author" onChange={(e) => setQuoteinfo({
                            ...Quoteinfo, Author: e.target.value
                        })} />
                        <ParaMessage>{error.Posted}</ParaMessage>
                        <QuoteAuthor value={ Quoteinfo.Posted} type="Text" placeholder="Posted By:" onChange={(e) => setQuoteinfo({
                            ...Quoteinfo, Posted: e.target.value
                        })} />
                            </InputContainer>
                    </QouteInput>
                </TextAthur>
                    <ButtonContainer>
                        <QuoteButton onClick={QuoteHandlers} style={{ cursor: 'pointer' }}>Add Quote</QuoteButton>
                    </ButtonContainer>
        </QuoteBox>
        
            </QuoteContainer>
</Container>
    )
}
export default HomeItems;