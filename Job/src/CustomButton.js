import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const StyledButton = styled('button')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 24px',
  gap: '12px',
  width: '89px',
  height: '32px',
  background: '#FCEBE8',
  borderRadius: '3px',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    background: '#FCEBE8',
  },
});

const Text = styled('span')({
  width: '41px',
  height: '24px',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
  textTransform: 'capitalize',
  color: '#F55533',
});

const CustomButton = ({ children, link }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <StyledButton onClick={handleClick}>
      <Text>{children}</Text>
    </StyledButton>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default CustomButton;
