import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';


function Header() {

    const[burgerStatus, setBurgerStatus] = useState(false);

  
  return (
    <Nav>
        <Logo src="https://www.unisabana.edu.co/typo3conf/ext/speciality/Resources/Public/Assets/assets/img/logo-es-mobile.png"/>
        <NavMenu>
            <StyledLink to={`/`}>
                <a>
                    <img src='/images/carro.png'></img> 
                    <span>INICIO</span>  
                </a>
            </StyledLink>
            <StyledLink to={`/agenda`}>
                <a>
                    <img src='/images/carro.png'></img> 
                    <span>AGENDA</span>  
                </a>
            </StyledLink>
            <StyledLink to={`/challenge`}>
                <a>
                    <img src='/images/carro.png'></img> 
                    <span>RETOS</span>  
                </a>
            </StyledLink>
            <StyledLink to={`/awards`}>
                <a>
                    <img src='/images/carro.png'></img> 
                    <span>PREMIOS</span>  
                </a>
            </StyledLink>
            
        </NavMenu>
        <RightMenu>
            <UserImg src='images/logo.png'/>
            <MenuIcon onClick={()=> setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}  onClick={()=> setBurgerStatus(false)}>
              <CloseWrapper>
                  <CustomClose onClick={()=> setBurgerStatus(false)}/>
              </CloseWrapper>
              <StyledLink1 to={`mentors`}><li>Mentores</li></StyledLink1>
              <StyledLink1><li>Participantes</li></StyledLink1>
              <StyledLink1><li>Jurados</li></StyledLink1>
              <StyledLink1><li>Mesa de Ayuda</li></StyledLink1>
              <StyledLink1><li>Preguntas</li></StyledLink1>
          </BurgerNav>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
      height: 100%;
      background: #19336A;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 0 3vh;
      overflow-x: hidden;
`
const Logo = styled.img`
      width: 22vh;
     
`
const NavMenu = styled.div`

    display: flex;
    flex: 1;
    margin-left: 5vh;
    flex-wrap: wrap;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 1vh;
        cursor: pointer;
        img{
            height: 8vh;
            
        }
        span{
            font-size: 1.5vh;
            letter-spacing: 1.42px;
            position: relative;
            text-decoration: none; 

            &:after{
                content:"";
                height: 0.2vh;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -0.1vh;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }

        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
            //background: url(images/boton2.png); 
            //object-fit:cover;
        }
    }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0; 
  background: white;
  border: 3px solid rgba(136, 148, 122, 0.7); 
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  width: 20vh;
  z-index: 16;
  list-style: none;
  padding: 2vh;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s;
  li{
    padding: 2vh 0;
    border-bottom: 1px solid rgba(0,0,0,.2);

    a{
      font-weight: 600; 
    }
    &:hover {
        border-radius: 0.6vh;
        border-color: rgba(249, 249, 249 , 0.8);
        color: white;
        background: url(images/boton.jpg);
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

const UserImg = styled.img`
   width: 5vh;
   height: 5vh;
   margin-right: 2vh;
   border-radius: 30%;
   cursor: pointer;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
const StyledLink1 = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 2vh;
}  
`