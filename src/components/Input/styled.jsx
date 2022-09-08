import styled from 'styled-components';
export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & label {
    position: absolute;
    transform: ${({ translate, scale }) => `${translate} ${scale}`};
    transform-origin: top left;
    transition: 200ms ease all;
    color: gray;
    line-height: 1;
    left: 2rem;
    &:focus-within {
      transform: translate(0, 0.12rem) scale(0.8);
    }
  }
  & input {
    height: 2.8rem;
    width: 13.2rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.primary.white};
    border: 2px solid lightgray;
    outline: none;
    color: gray;
    line-height: 0;
    &:focus + label {
      color: gray;
      opacity: 1;
      transform: scale(0.65) translate3d(0, 0.5rem, 0);
    }
  }
`;
