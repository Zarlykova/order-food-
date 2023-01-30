import styled from "styled-components";
import BasketButton from "./BasketButton";


const Header =()=>{
    return(
        <Container>
            <Logo>ReactMeals</Logo>
            <BasketButton> 
               
            </BasketButton>
        </Container>
    )
}

export default Header;


const Container = styled.header`
position: fixed;
z-index: 1;
top:0;
width: 100%;
height: 101px;
background-color:#8a2b06;
display: flex;
justify-content: space-between;
padding-left:120px ;
padding-right:120px ;
align-items: center;
`

const Logo = styled.p`
font-weight: 600;
font-size: 38px;
line-height: 57px;
color: #FFFFFF;
margin:0;

`