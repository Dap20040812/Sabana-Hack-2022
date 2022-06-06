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
            <AlertInfo>
                <AlertLeft>
                    <PhotoDiv>
                        <MentorPhoto2 src={"/images/messi.jpg"}/>
                    </PhotoDiv>
                    <MentorName2 href='https://www.linkedin.com/in/christianabril/'>Nombre</MentorName2>
                </AlertLeft>
                <AlertRight>
                    <MentorSchedule>Horario de atencion</MentorSchedule>
                    <Line/>
                    <MentorField>Campo</MentorField>
                    <Line/>
                    <MentorTeams>Teams</MentorTeams>
                    <Line/>
                    <MentorChallenge>Reto</MentorChallenge>
                    <Line/>
                    <MentorEmail>Email</MentorEmail>
                </AlertRight>
            </AlertInfo>
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

const Mentor = styled.div `
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    grid-gap: 2vh;
    margin-top: 1vh;
    margin-left: 2vw;
    width: 60vw;
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
    padding: 2px;
    border: 1px solid black;
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
  justify-content: space-around;
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
  padding-right: 1vw;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

`

const AlertInfo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    padding-top: 6vh;
    border: 3px solid black;
    height: 57vh;
    width: 100vh;
`

const AlertRight = styled.div `
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    padding-left: 3vw;
`

const AlertLeft = styled.div `
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 3vw;
    padding-top: 8vh;
`

const MentorSchedule = styled.p `

`

const MentorChallenge = styled.p `

`

const MentorField = styled.p `

`

const MentorEmail = styled.p `

`

const MentorTeams = styled.p `

`

const MentorPhoto2 = styled.img `
    width: 25vh;
    padding: 4px;
`

const MentorName2 = styled.a `
    font-size: 28px;
    color: black;
    margin-top: 1vh;

    &:hover {
        color: #19336A;
    }
`

const Line = styled.hr`
    background-color: #19336A;
    background: #19336A;
    border: 0.15vh solid;
    width: 30vh;
`

const PhotoDiv = styled.div `
    display: flex;
    align-items: center;
    border: 3px solid #19336A;
`