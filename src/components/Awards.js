import React from 'react'
import styled from 'styled-components'


function Awards() {
  return (
    <Container>
        <Background>
            <img src="images/award.jpg"/>
        </Background>
    </Container>
  )
}

export default Awards

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
    margin-top: 5vh;
    font-size: 10vh;
    padding: 2vh;
    
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
    padding: 5vh;
    font-size: 2.5vh;
    max-width: 70vh;

`