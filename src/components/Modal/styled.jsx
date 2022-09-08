import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  top: 3.5vh;
  left: 50%;
  transform: translateX(-50%);
  width: 38rem;
  height: 20rem;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  z-index: 10;
  perspective: 1000px;

  @media (min-height: 780px) {
    top: 39.5vh;
  }
`;
export const SchoolMark = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 11rem;
  padding: 3rem;
  margin-left: 2rem;
  background-color: ${({ theme }) => theme.palette.primary.white};

  & img {
    margin-top: -1.8rem;
    width: 3rem;
    height: auto;
    z-index: 10000;
  }
  & div {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 10rem;
    background: linear-gradient(to bottom, rgba(137, 255, 241, 0) 50%, #6255a5 100%);

    & h4 {
      z-index: 10000;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
export const DataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 1.5rem;
  width: 100%;
  height: 100%;
`;
export const CardHeadline = styled.h1`
  color: white;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
  & span {
    color: ${({ theme }) => theme.palette.primary.green};
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  width: 28rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.green};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.primary.purple};
`;
export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.9s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  ${({ rotate }) => rotate && `transform: rotateY(-180deg)`};

  & flip__card {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #6255a5;
  backface-visibility: hidden;
`;
export const CardBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: #333333;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #6255a5;
  transform: rotateY(180deg);
`;
export const Logo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;
export const ColumnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8rem;
  width: 100%;
`;
export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  & article {
    margin-top: 0.3rem;
    padding: 0.05rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
  }
`;
