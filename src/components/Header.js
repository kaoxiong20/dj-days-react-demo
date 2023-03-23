import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    return (
        <>
        <HeaderText>{props.HeaderContent}</HeaderText>
        </>
    );
}

export default Header;

const HeaderText = styled.h1`
    text-align: center;
    background-color: #B2A6A6;
    border: 20px;
    padding: 15px;
`