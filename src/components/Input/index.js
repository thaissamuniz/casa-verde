import styled from 'styled-components';
//import React, { useState } from 'react';

const NewsletterInput = styled.input`
    height: 65px;
    width: 300px;
    padding: 27px 55px;
    box-sizing: border-box;
    border: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    background-image: url('./img/Vector.svg');

    ::placeholder{
        color: #202020;
        opacity: 0.5;
        font-family: 'Montserrat', sans-serif;
    }

`

const Input = (props) => {
    
    const handleChange = (e) => {
        props.aoAlterado(e.target.value)
    };

    return (
        <NewsletterInput type='text' placeholder="Insira seu e-mail" value={props.valor} onChange={handleChange} />
    )
}

export default Input;