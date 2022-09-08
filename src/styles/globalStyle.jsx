import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
}
& #root{
  display: flex;
  justify-content: center;
  align-items: center;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: ${({ theme }) => theme.palette.background.mainGradient};
}`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  padding: 2rem;
`;
export default Global;
