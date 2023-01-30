import styled from "styled-components";
import {ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg"



const BasketButton =({ count })=>{
    return(
        <StyledButton>
            <BasketIcon/> 
             <StyledTitle>Your cart  
             </StyledTitle>
             <StyledCounter id="counter">
                { count || 0 }
             </StyledCounter>


        </StyledButton>
    )
}

export default BasketButton;


const StyledButton = styled.button`
background: #5a1f08;
border-radius: 30px;
padding: 12px 32px;
font-weight: 600;
font-size: 16px;
line-height:24px;
color: #ffffff;
border:none;
display: flex;
align-items: center;
cursor: pointer;

&:hover{
    background-color:#2c0d00;
}
&:hover > #counter{
    background-color: #5e1d03;
}

`

const StyledTitle = styled.span`
margin-left:12px;
margin-right:24px;
`

const StyledCounter = styled.span`
background-color: #8a2b06;
border-radius: 30px;
font-weight:700;
font-size:20px;
line-height:27px;
color:#ffffff;
padding: 4px 20px;
`