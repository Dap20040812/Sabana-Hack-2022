import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Agenda() {
    const[cancelStatus, setCancelStatus] = useState(false);
    const cancel = () => {
        setCancelStatus(true); 
     }
     const close = () => {
        setCancelStatus(false); 
     }
  return (
    <Container>
        <Background>
            <img src="https://www.studiosur.net/wp-content/uploads/2019/10/U.-de-la-Sabana-10-1500x993.jpg" />
        </Background>
        <Alert show={cancelStatus}>
            <CloseWrapper>
                <CustomClose onClick={close}/>
            </CloseWrapper>
            <Title1>Acto de Apertura</Title1>
            <Detail>
                <Line/>
                <Section>
                    <Text>Lider : </Text>
                    <Text> Jenny</Text>
                </Section>
                <Line/>
                <Section>
                    <Text>Hora del Evento : </Text>
                    <Text> 8:00 - 9:00 am</Text>
                </Section>
                <Line/>
                <Section>
                    <Text>Detalles : </Text>
                    <Text>NO Se holi</Text>
                </Section>
                <Line/>
                <ButtonS>Accede al Evento</ButtonS>
            </Detail>

        </Alert>
        <Title>Agenda</Title>   
        <Data>
            <Date>Sábado 7</Date>
            <Activity onClick={cancel}>
                <Text>Acto de Apertura</Text>
                <Time>8:00 - 9:00 am</Time>
            </Activity>
            <Activity>
                <Text>Reunión Retos</Text>
                <Time>9:00 - 10:00 am</Time>
            </Activity>
            <Activity>
                <Text>Trabajo por Equipos</Text>
                <Time>10:00 am</Time>
            </Activity>
        </Data>
        
    </Container>
  )
}

export default Agenda

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
const Title = styled.div`
    margin-top: 3vh;
    font-size: 8vh;
    padding: 2vh;
    
    max-height: 200vh;
    width: 100vh;
    overflow: hidden;
    
`
const Title1 = styled.div`
    margin-top: 3vh;
    font-size: 8vh;
    padding: 2vh;
    color: black;
    max-height: 200vh;
    width: 100vh;
    overflow: hidden;
    
`
const Welcome = styled.div`
    margin-top: 5vh;
    font-size: 3vh;
    padding: 2vh;
    
    max-height: 200vh;
    width: 100vh;
    overflow: hidden;
    
`

const Part1 = styled.div`
    padding: 10vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    img {
        margin-left: 10vh;
        width: 40vh;
        height: 40vh;
    }
`

const TextPart = styled.div`
    display: flex;
    flex-direction: column;
`
const Text = styled.div`
    font-size: 2.8vh;
`
const Data = styled.div`
    border-radius: 1vh;
    background-color: #929294BA;
    margin-top: 5vh;
    opacity: 0.9;
    max-height: 200vh;
    width: 100vh;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.7); 
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`
const Date = styled.div`
    top: 0;
    width: 100%;
    font-size: 5vh;
    background: url(images/boton.jpg);
`
const Activity = styled.div`
    margin: 1vh;
    display: flex;
    height: 8vh;
    color: black;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    border: 3px solid rgba(249, 249, 249, 0.1); 
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    background-color: #FFFFFFDE;

    &:hover {
        transform: scale(1.02);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(255, 255, 255 , 0.8);
        color: white;
        background-color: #000000ED;
        opacity: 0.9;
    }

`

const Time = styled.div`
    margin-left: 2vh;
    font-size: 2.8vh;

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
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2vh;
    color: black;
    align-items: center;
`
const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;

`
const Line = styled.hr`
    background-color: black;
    background: black;
    border: 0.2vh solid;
    width: 100%;
`
const ButtonS = styled.a`
    width: 40vh;
    background-color: #19336A;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 3vh;
    cursor: pointer;
    letter-spacing: 1.5px;
    margin-top: 10vh;

    &:hover {
        background: url(images/boton.jpg);
        opacity: 0.8;
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249 , 0.8);
    }

    
`