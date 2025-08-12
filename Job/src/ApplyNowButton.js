import styled from 'styled-components';

const Button = styled.button`
  /* Auto layout */
  display: flex;
  position: absolute; /* Use absolute positioning to control the position */
  top: 642px;
  right: 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 12px;

  width: 123px;
  height: 32px;

  background: #F55533;
  border-radius: 3px;
  border: none; /* Remove default button border */
  cursor: pointer; /* Add pointer cursor on hover */

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;

  color: #FFFFFF;

  &:hover {
    background: #D94420; /* Optional: Darker background on hover */
  }
`;

const ApplyNowButton = ({ children, link }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ApplyNowButton;
