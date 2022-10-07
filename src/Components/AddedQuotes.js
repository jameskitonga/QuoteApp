import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import styled from "styled-components"
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




const Container = styled.div`

`
const TextContainer = styled.div`
text-align:center;

`
const QuoteAppended = styled.div`
margin:0 auto;
width:60%;

`
const CardContainer = styled.div`
margin:2em;
background-color:#5F9DF7;
text-align:center center;
padding:1em;
border-radius:6px;
border:2px solid blue;

`
const AppendedHeading = styled.p`
color:${props => {
        if (props.color == "red") {
            return "red"
        }
        else if (props.color == "purple") {
            return "purple"
        }
    }}
    font-size:${props => {
        if (props.font === "Author")
            return "8rem"
    }
    }

`

const AppendedQuote = styled.h2`
font-family:san-serif;
fonrt-weight:bold;
margin:1em;

`
const AppendedAuthor = styled.h3`
font-family:san-serif;
`
const AppendePost = styled.p`
font-family-san-serif;
`
const date = new Date()
const LikeDiv = styled.div``
const Button = styled.button`cursor: pointer;`
const IconsDiv = styled.div`
display:flex;
gap:1em;
padding:1em;
`

const Icon = styled.div`
display:flex;
justify-content:flex-end;
gap:1em;
`

const AddedQuote = () => {

    const [data, setData] = useState([])
    const [thumbUp, setThumbUp] = useState(0)
    const [thumbDown, setThumbDown] = useState(0)
    const [opinion, setOpinion] = useState({
        likes: false,
        dislike: false,
    });









    useEffect(() => {
        const fetchQuotes = async () => {

            const querySnapshot = await getDocs(collection(db, "Quote"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.data());
                setData((prev) => ([...prev, doc.data()])

                );


            });
        }
        fetchQuotes();
    }, [])
    console.log(data)

    const unique = []
    const uniqueQuotes = data.filter((element) => {
        const isDuplicate = unique.includes(element.Quote);
        if (!isDuplicate) {
            unique.push(element.Quote);

            return true
        }
        return false
    });

    console.log(uniqueQuotes)

    return (

        <Container>

            <QuoteAppended>
                {uniqueQuotes.map((item, index) => {
                    return (
                        <CardContainer key={index}>
                            <Icon>
                                <Button><EditIcon /></Button>
                                <Button><DeleteIcon /></Button>
                            </Icon>
                            <TextContainer>
                                <AppendedQuote font="Author" >{item !== undefined && item.Quote}</AppendedQuote>
                                <AppendedAuthor color="red">{item !== undefined && item.Author}</AppendedAuthor>
                                <AppendePost >{item !== undefined && item.Posted}</AppendePost>
                            </TextContainer>
                            <IconsDiv>
                                <Button onClick={(e) => setOpinion(prev => ({ ...prev, likes: !prev.likes }))}><ThumbUpIcon />{opinion.likes ? 1 : ""}</Button>
                                <Button onClick={(e) => setOpinion(prev => ({ ...prev, dislike: !prev.dislike }))}><ThumbDownAltIcon />{opinion.dislike ? 1 : ""}</Button>
                            </IconsDiv>
                        </CardContainer>

                    )
                })}
            </QuoteAppended>
        </Container>
    )
}
export default AddedQuote;

