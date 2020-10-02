import React from 'react';
import styled from '@emotion/styled';

const SentenceContainer = styled.div`
    padding: 1.5rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    @media(min-width: 992px){
        margin-top: 15rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 5rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 1rem;
    }

`;

const Sentence = ({ sentence }) => {

    return ( 
        <SentenceContainer>
            <h1>{sentence.quote}</h1>
            <p> {sentence.author} </p>
        </SentenceContainer>
    );
}

export default Sentence;