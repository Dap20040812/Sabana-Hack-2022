import React from 'react'
import styled from 'styled-components'


function Awards() {
  return (
    <Container>
        <Background>
            <img src="images/award.jpg"/>
        </Background>
        <Title>Premios y Patrocinios</Title>
        <Images>
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbb567104-d68d-4eae-8d96-429603c2fc03%2FSOCIAL.png?table=block&id=d965fafa-7964-41d8-9cca-cae00c5463f1&spaceId=aa89ea37-31ca-405f-9441-0432b592b7e7&width=2000&userId=&cache=v2' width="50%"/>
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8e0df174-b4b8-439f-93b9-524f54268149%2F1Ci_Rocket_Kumara.png?table=block&id=012d9d40-5548-436a-b51e-58fd79b05601&spaceId=aa89ea37-31ca-405f-9441-0432b592b7e7&width=2000&userId=&cache=v2' width="50%"/>
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F66d32516-e294-450f-b709-68bce974ab73%2FEveris.png?table=block&id=63ce9662-775f-4194-b52b-5e59b6e7e6e5&spaceId=aa89ea37-31ca-405f-9441-0432b592b7e7&width=2000&userId=&cache=v2' width="50%"/>
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fac774236-8483-4bb9-9019-109f24a74eff%2FClaro.png?table=block&id=f391cb0d-d3f9-4c08-abf4-30504ea1ee2d&spaceId=aa89ea37-31ca-405f-9441-0432b592b7e7&width=2000&userId=&cache=v2' width="50%"/>
        </Images>
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
const Images = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`