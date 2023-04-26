import styled from "styled-components";

export const Container = styled.div `
    display:flex;
 
    flex-direction:row;
    width:100%;
    max-width:80%;
    
    margin:auto;
    justify-content: space-between;

    font-family:'Open sans';
    
    margin: 0 auto;
    margin-top: 120px;
`

export const Title = styled.div `
    width:100%;
    
    flex:1;

    h1{
        max-width:388px;
        line-height:43px;
    }
`

export const Section = styled.section `
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-right: 20px;
    flex:1;
    h1{
        font-size:32px;
        font-weight:700;
        margin-bottom:10px;
    }

    h3{

        font-size:18px;
        font-weight:400;
        margin-bottom:40px;
    }
    
    form {
        width:90%
    }
    
    button{
        font-size:18px;
    }

    input{
        font-size:18px;
    }
`

export const ParagraphPrimary = styled.p `
        width:100%;
        max-width:372px;
        font-size:18px;
        line-height:24px;    

`

export const SpacingButton  = styled.div `
    margin: 40px 0;
`

export const ParagraphSecondary = styled.p `
    width:100%;
    max-width:372px;
    font-size:14px;
    margin-top:10px;
    font-weight:700;
    
    span{
        color:#23DD7A;
        
    }
    a{
        text-decoration:none;
    }
`