import styled from 'styled-components';

const NewsletterInput = styled.input`
    height: 65px;
    width: 300px;
    padding: 27px 55px;
    box-sizing: border-box;
    border: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    ::placeholder{
        color: #202020;
        opacity: 0.5;
        font-family: 'Montserrat', sans-serif;
    }

`
export default NewsletterInput;