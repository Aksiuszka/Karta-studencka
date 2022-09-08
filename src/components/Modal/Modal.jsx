import React, { useState } from 'react';
import {
  ModalContainer,
  SchoolMark,
  DataContainer,
  CardHeadline,
  Button,
  CardInner,
  CardFront,
  CardBack,
  Logo,
  Container,
  Column,
  ColumnContainer,
} from './styled';
import Republika from '../../assets/rpzabia.png';

function Modal({ onCancel, modalContent: { ...rest } }) {
  const [rotate, setRotate] = useState();
  const data = rest;

  const dataArray = Object.keys(data).map(key => [key, data[key]]);
  const half = Math.floor(dataArray.length / 2);
  const columnOne = dataArray.slice(0, half);
  const columnTwo = dataArray.slice(half, dataArray.length);
  const handleClick = () => {
    setRotate(!rotate);
  };
  return (
    <ModalContainer>
      <CardInner rotate={rotate}>
        <CardFront className="flip__card">
          <Container>
            <SchoolMark>
              <img src={Republika} alt="republika zabia" />
              <h4>REPUBLIKA</h4>
              <h4>ŻABIA</h4>
              <div></div>
            </SchoolMark>
            <DataContainer>
              <CardHeadline>
                Dane <span>Studenta:</span>
              </CardHeadline>
              <ColumnContainer>
                <Column>
                  {columnOne.map(item => (
                    <article> {item[1]}</article>
                  ))}
                </Column><Column>
                  {columnTwo.map(item => (
                    <article> {item[1]}</article>
                  ))}
                </Column>
                {/* {dataArray.map(item => (
                <article> {item[1]}</article>
              ))} */}
                {/* {Object.keys(data).map(key => (
          <article>{data[key]}</article>
        ))} */}
              </ColumnContainer>
            </DataContainer>
          </Container>
          <Button onClick={handleClick} type="button">
            Odwroc
          </Button>
        </CardFront>
        <CardBack className="flip__card">
          <Logo>
            <img src={Republika} alt="republika zabia" />
          </Logo>

          <Button onClick={handleClick} type="button">
            Odwroc
          </Button>
        </CardBack>
      </CardInner>
    </ModalContainer>
  );
}

export default Modal;
