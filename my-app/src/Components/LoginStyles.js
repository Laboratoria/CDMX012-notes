import styled from "styled-components";

export const Div = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
border: 15px
padding:-10;
margin: 0px

`
export const Section = styled.section`
display: inline-block;
padding: 10px;  
font-size: 30px;
align-items: center;
background: whitesmoke;
padding-left: 0;
margin-left: 0px;
transition: all .3s ease;

&:hover{
        
    background-color: #4285F4 ;
}

`



export const Button = styled.button`
display: inline-flex;

    position: absolute;
    background: whitesmoke;
    color:black;
    width: 345px;
    border-radius: 3px;
    border: thin solid #888;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
    transition: all .3s ease;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    transition: all .3s ease;
    font-size: 22px;
    align-items: center;
    font-weight: bolder;
    justify-content: center;
    min-height: 40px;
    min-width: 0px;
    overflow: hidden;
    padding: 0px;
    height: 63px;
    margin:0;

    &:hover{
        
        background-color: #4285F4 ;
    }
 
  `