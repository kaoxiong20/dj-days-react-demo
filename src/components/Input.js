import React from 'react';
import styled from 'styled-components';

function Input() {
  return (
    <AlbumInput type="text" placeholder="Submit a New Album!" />
  );
}

export default Input;


const AlbumInput = styled.input`
background-color: #000000;
`