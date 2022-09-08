import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 53rem;
  height: 30rem;
  margin-top: 10rem;
  border-radius: 1.5rem;
  font-family: ${({ theme }) => theme.fontFamily.main};
  background-color: ${({ theme }) => theme.palette.primary.white};
  box-shadow: ${({ theme }) => theme.extend.boxShadowing.regular};
`;
// export const CardInner = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   transition: transform 0.9s;
//   transform-style: preserve-3d;
//   transform: rotateY(-180deg)
//   ${({ rotate }) => rotate && `transform: rotateY(-180deg);`}

//   .flip__card {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//   }
// `;

// export const CardFront = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ theme }) => theme.palette.primary.white};
//   box-shadow: ${({ theme }) => theme.extend.boxShadowing.regular};
//   border: 1px solid #e3e3e3;
//   border-radius: 20px;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
// `;
// export const CardBack = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ theme }) => theme.palette.primary.white};
//   box-shadow: ${({ theme }) => theme.extend.boxShadowing.regular};
//   border-radius: 20px;
//   color: #333333;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   transform: rotateY(180deg);
// `;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  gap: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #574496;
  & img {
    margin-left: 3rem;
    width: 3rem;
    height: auto;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 0.5rem;
  padding: 0;
`;
export const Form = styled.form`
  display: flex;
  align-content: flex-end;
  margin-right: 2rem;
`;
export const Headline = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2.4rem;

  color: ${({ theme }) => theme.palette.text.heading};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  & span {
    color: ${({ theme }) => theme.palette.primary.green};
  }
`;

export const Button = styled.button`
  width: 13.2rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-left: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.purple};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.primary.white};
`;
