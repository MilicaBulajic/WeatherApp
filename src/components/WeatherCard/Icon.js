import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

    const Icon = styled.img`
        width: 40%;
    `
    return (
            <Icon  className="icon" src="./img/cloud.png" alt="icon"/>
    );
};

export default Icon;