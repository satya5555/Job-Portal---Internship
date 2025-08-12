import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  top: 94px;
  right: 183px;
  bottom: 642px;
  left: 1075px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 12px;

  margin: 0 auto;
  width: 108px;
  height: 32px;
  
  flex: none;
  order: 3;
  flex-grow: 0;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 12px;

  width: 108px;
  height: 32px;
  
  background-color: #F55533;
  border-radius: 3px;
  border: none;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #FFFFFF;
  
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94422;
  }

  &:active {
    background-color: #c23a1d;
  }
  
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const FindJobButton = ({ onClick, children }) => (
  <ButtonContainer>
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  </ButtonContainer>
);

export default FindJobButton;
