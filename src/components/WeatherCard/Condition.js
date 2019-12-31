import React from 'react';
import styled from '@emotion/styled';

const Condition = (props) => {

    const Temp = styled.div`
          font-family: 'Fira Sans', sans-serif;
    `
    const State = styled.h3`
        font-family: 'Merriweather', sans-serif;
    `

    return (
        <>
            <Temp>20 C</Temp>
            <State className='condition'>Clouds</State>
        </>
    );
};

export default Condition;