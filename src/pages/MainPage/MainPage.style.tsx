import styled from 'styled-components';
import {Colors} from '../../constants/colors';

export const StyledMainPage = styled.div`
  background: radial-gradient(${Colors.BACKGROUND}, ${Colors.DARK_BACKGROUND});
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`;
