// come back to this to try to make an HTML Form (W3 Schools)
import React from 'react';
import styled from 'styled-components';

const StyledForm = (props) => {
    return (
    <>
<StyledInputForm type="text" value="Album Name"></StyledInputForm>
    </>
    );
}

export default StyledForm;

const StyledInputForm = styled.p`
background-color: #000000;
`