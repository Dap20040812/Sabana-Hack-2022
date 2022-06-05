import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Mentors() {
    const [mentorInfo, setMentorInfo] = useState(false)
    const handleClick2 = () => {
        setMentorInfo(true)
    }
    const close = () => {
        setMentorInfo(false)
    }
  return (
    <Container>
        <Background>
            <img src='https://www.unisabana.edu.co/fileadmin/_processed_/e/2/csm_nao-sabana-hack_107330c0ea.jpeg'/>
        </Background>
        <Alert show={mentorInfo}>
            <CloseWrapper>
                <CustomClose onClick={close}/>
            </CloseWrapper>
        </Alert>
        <Title>Mentores</Title>
        <Mentor>
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
        </Mentor>
    </Container>

  )
}

export default Mentors

const Container = styled.div`
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        filter: brightness(50%);
    }
`
const List = styled.div `
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    background: transparent;
`

const ListItem = styled.div `
    border: 1px solid lightgrey; 
    width: 80vw;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3vh;
    background: white;
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
    background: transparent;
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

const Mentor = styled.div `
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
    background-color: white;
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
const Title = styled.div`
    margin-top: 5vh;
    font-size: 10vh;
    padding: 2vh;
    
    max-height: 200vh;
    width: 100vh;
    overflow: hidden;
    
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
const Alert = styled.div`
  position: fixed;
  top: 10%;
  left: 27%;
  right: 30%;
  right: 30vw;
  background: white;
  border: 3px solid rgba(136, 148, 122, 0.7); 
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  width: 100vh;
  height: 70vh;
  z-index: 16;
  list-style: none;
  padding: 2vw 2vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: ${props => props.show ===false ? 'translatey(-10000%)': 'translatey(0%)'};
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

const CustomClose = styled(CloseIcon)`
  cursor: pointer;  
  color: black;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`