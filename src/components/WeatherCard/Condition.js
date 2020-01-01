import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temp, condition })=> {

    const Temp = styled.div`
          font-family: 'Fira Sans', sans-serif;
    `
    const State = styled.h3`
        font-family: 'Merriweather', sans-serif;
    `

    return (
        <>
            <Temp>{temp}C°</Temp>
            <State>{condition}</State>
        </>
    );
};

export default Condition;