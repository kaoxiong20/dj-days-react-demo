import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButton';

const Form = (props) => {
    return (
        <>
    <AlbumNameInput type = "text"/>
    <SubmitButton>Submit</SubmitButton>
        </>
    );
}
  
export default Form;

const AlbumNameInput = styled.input`
    border-style: groove;
    border-color: #B09F9F;
    font-size: 15px;
    ;
`

const AlbumArtistInput = styled.p`
    border-style: groove;
    background-color: #B09F9F;
`

const AlbumGenreInput = styled.p`
    border-style: solid;
    background-color: #B09F9F;
`