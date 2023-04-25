import styled from "styled-components";

export const InputContainer = styled.div `
    width:100%;
    max-width:275px
    height:30px;
    border-bottom:1px solid #3B3450;

    display:flex;
    align-items:center;
    margin-bottom:20px;
`

export const IconConteiner = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color:transparent;
    color:#FFF;
    border:0;
    height:30px;
    width:100%;
`

export const ErroText = styled.p`
    font-size:12px;
    color:#d11f43;
    margin:15px 0 ;
    font-family:'Open sans';
`