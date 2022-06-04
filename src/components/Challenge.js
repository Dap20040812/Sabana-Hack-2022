import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';


function Challenge() {

    const [content, setContent] = useState(true)
    const [mentorInfo, setMentorInfo] = useState(false)

    const handleClick = () => {
        setContent(!content)
    }

    const handleClick2 = () => {
        setMentorInfo(true)
    }

    const renderContent = () => {
        if(!content) {
            return(
                <ItemContent>
                    <Description>
                        Descripción del reto
                    </Description>
                    <DescInfo>
                        Info AAAAAAAAAAAA
                    </DescInfo>
                    <Description>
                        Mentores
                    </Description>
                    <Mentors>
                        <MentorItem onClick={handleClick2}>
                            <MentorPhoto src={"/images/messi.jpg"}/>
                            <MentorInfo>
                                <MentorName>Nombre</MentorName>
                                <MentorConocimiento>Conocimientoooo</MentorConocimiento>
                            </MentorInfo>    
                        </MentorItem>
                        <MentorItem>
                            <MentorPhoto src={"/images/messi.jpg"}/>
                                <MentorInfo>
                                    <MentorName>Nombre</MentorName>
                                    <MentorConocimiento>Conocimientoooo</MentorConocimiento>
                                </MentorInfo>  
                        </MentorItem>
                        <MentorItem>
                            <MentorPhoto src={"/images/messi.jpg"}/>
                                <MentorInfo>
                                    <MentorName>Nombre</MentorName>
                                    <MentorConocimiento>Conocimientoooo</MentorConocimiento>
                                </MentorInfo>  
                        </MentorItem>
                        <MentorItem>
                            <MentorPhoto src={"/images/messi.jpg"}/>
                            <MentorInfo>
                                <MentorName>Nombre</MentorName>
                                <MentorConocimiento>Conocimientoooo</MentorConocimiento>
                            </MentorInfo>    
                        </MentorItem>
                        <MentorItem>
                            <MentorPhoto src={"/images/messi.jpg"}/>
                            <MentorInfo>
                                <MentorName>Nombre</MentorName>
                                <MentorConocimiento>Conocimientoooo</MentorConocimiento>
                            </MentorInfo>    
                        </MentorItem>
                        <MentorItem>
                            <MentorPhoto src={"/images/messi.jpg"}/>
                            <MentorInfo>
                                <MentorName>Nombre</MentorName>
                                <MentorConocimiento>Conocimientoooo</MentorConocimiento>
                            </MentorInfo>    
                        </MentorItem>
                    </Mentors>
                    <Judges>
                        <JudgeItem>

                        </JudgeItem>
                    </Judges>
                </ItemContent>
            )
        }
    }

  return (
    <Container>
        <Alert show={mentorInfo}>
            <p>hola</p>
            <Close onClick={() => setMentorInfo(false)}></Close>
        </Alert>
        <List>
            <ListItem>
                <ListMain onClick={handleClick}>
                    <ItemTitle>
                        RETO
                    </ItemTitle>
                </ListMain>
                {renderContent()}
            </ListItem>
        </List>
    </Container>
  )
}

export default Challenge

const Container = styled.div`
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: white;
`
const List = styled.div `
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
`

const ListItem = styled.div `
    border: 1px solid lightgrey; 
    width: 80vw;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3vh;
`

const ItemTitle = styled.p `
    font-weight: 600;
    font-size: 22px;
    padding-left: 2vw;
`

const ItemContent = styled.div `
    font-size: 14px;
    font-weight: 400;
    background-color: white;
    width: 80vw;
    text-align: left;
`

const ListMain = styled.div `
    background-color: #0000000D;
    cursor: pointer;
    text-align: left;
    width: 80vw;
`

const Description = styled.div `
    font-size: 18px;
    font-weight: 500;
    padding-left: 2vw;
    padding-top: 2vh;
    padding-bottom: 1vh;
`

const DescInfo = styled.div `
    font-weight: 400;
    font-size: 14px;
    padding-left: 2vw;
    padding-bottom: 1vh;
`

const Mentors = styled.div `
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    grid-gap: 2vh;
    margin-top: 1vh;
    margin-left: 2vw;
`
const MentorItem = styled.div `
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    overflow: hidden;
    color: black;
    width: 80%;
    margin: 1% 2.5%;
    border: 3px solid #19336A; 
    transition: all 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.05);
        border-color: white;
        color: white;
        background-color: #19336ACC;
        opacity: 0.9;
    }
`

const MentorName = styled.p `
    
`

const MentorPhoto = styled.img `
    width: 6vw;
`
const Judges = styled.div `

`

const JudgeItem = styled.div `

`

const MentorInfo = styled.div `
    padding-left: 15px;
`

const MentorConocimiento = styled.p `
`
const Alert = styled.div `
    position: fixed;
    top: 0;

    background: white;
    border: 3px solid rgba(136, 148, 122, 0.7); 
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    width: 30vw;
    z-index: 16;
    list-style: none;
    padding: 2vw 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transform: ${props => props.show ===false ? 'translatey(-200%)': 'translatey(0%)'};
    transition: transform 0.2s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600; 
        }
        &:hover {
            border-radius: 0.6vh;
            border-color: rgba(249, 249, 249 , 0.8);
            color: white;
            background-color: #0000003D;
            opacity: 0.9;
        }
    }
`

const Close = styled(CloseIcon) `
    color: black;
    cursor: pointer;
`