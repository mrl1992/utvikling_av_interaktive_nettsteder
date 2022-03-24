import styled from 'styled-components';
import { func } from 'prop-types';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  display: flex;
  margin: 50px 0 10px auto;
  border: 2px solid ${({ theme }) => theme.shift.text};
  background: linear-gradient(to right, white, black);
  border-radius: 5px;
  cursor: pointer;
  width: 210px;
`;

const StyledWhite = styled.p`
  margin: 0 auto;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background: white;
  font-size: 1rem;
`;
const StyledBlack = styled.p`
  margin: auto;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background: black;
  font-size: 1rem;
  color: white;
`;

const Toggle = ({ toggleTheme }) => (
  <Button
    onClick={toggleTheme}
    animate={{ backgroundColor: ['#FFFFFF', '#000000', '#FFFFFF'] }}
    transition={{
      duration: 5,
    }}
  >
    <StyledWhite>Lys eller</StyledWhite>
    <StyledBlack>mørk?</StyledBlack>
  </Button>
);
Toggle.propTypes = {
  toggleTheme: func.isRequired,
};
export default Toggle;
