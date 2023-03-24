import React from 'react';
import styled from 'styled-components';

function SubmitButton() {
  return (
    <NewAlbumButton>Submit</NewAlbumButton>
  );
}

export default SubmitButton;

const NewAlbumButton = styled.button`
  background-color: #A59191;
  padding: 6px;
  cursor: pointer;
  border-radius: 10px;
`;