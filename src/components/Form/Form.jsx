import React, { useState, useReducer } from 'react';
import {
  Container,
  Navigation,
  Form,
  Area,
  Headline,
  SectionContainer,
  Button,
  CardInner,
  CardFront,
  CardBack,
} from './styled';
import ZabkowicLogo from '../../assets/logo.png';
import Modal from '../Modal';
import Backdrop from '../Backdrop';
import InputItem from '../Input/Input';

const initialValues = {
  firstName: '',
  lastName: '',
  pesel: '',
  startDate: '',
  faculty: '',
  album: '',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'FIRST_NAME':
      return { ...state, firstName: payload };
    case 'LAST_NAME':
      return { ...state, lastName: payload };
    case 'PESEL':
      return { ...state, pesel: payload };
    case 'START':
      return { ...state, start: payload };
    case 'FACULTY':
      return { ...state, faculty: payload };
    case 'ALBUM':
      return { ...state, album: payload };
    case 'RESET':
      return initialValues;
    default:
      return state;
  }
};

function Forma(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [modalContent, setModalContent] = useState(initialValues);

  const handleClick = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleRotation = () => {
    console.log('I rotate');
    setRotate(!rotate);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setModalContent(state);
  };
  const onNameChange = e => {
    console.log(e.target.value);
    dispatch({ type: 'FIRST_NAME', payload: e.target.value });
  };
  const onSurnameChange = e => {
    dispatch({ type: 'LAST_NAME', payload: e.target.value });
  };
  const onPeselChange = e => {
    dispatch({ type: 'PESEL', payload: e.target.value });
  };
  const onStartChange = e => {
    dispatch({ type: 'START', payload: e.target.value });
  };
  const onFacultyChange = e => {
    dispatch({ type: 'FACULTY', payload: e.target.value });
  };
  const onAlbumChange = e => {
    dispatch({ type: 'ALBUM', payload: e.target.value });
  };

  return (
    <Container>
      <Navigation>
        <img src={ZabkowicLogo} alt="zabkowic logo" />
        <h4>Uniwersytet Żabkowica</h4>
      </Navigation>
      <SectionContainer>
        <section>
          <Area>
            <Headline>
              <h1>
                Twoja <span>karta studenta</span>
              </h1>
            </Headline>
          </Area>
        </section>
        <Form onSubmit={handleSubmit}>
          <section>
            <Area>
              <InputItem
                label="Imie:"
                type="text"
                value={state.firstName}
                onChange={onNameChange}
              />
              <InputItem
                label="Nazwisko:"
                type="text"
                value={state.lastName}
                onChange={onSurnameChange}
              />
              <InputItem
                label="Pesel:"
                type="number"
                value={state.pesel}
                onChange={onPeselChange}
              />
              <InputItem
                label="Data rozpoczęcia:"
                type="date"
                value={state.start}
                onChange={onStartChange}
              />
            </Area>
          </section>
          <section>
            <Area>
              <InputItem
                label="Kierunek:"
                type="text"
                value={state.faculty}
                onChange={onFacultyChange}
              />
              <InputItem
                label="Numer albumu:"
                type="number"
                value={state.album}
                onChange={onAlbumChange}
              />
              <Button type="submit" onClick={handleClick}>
                Wygeneruj
              </Button>
              {modalIsOpen && <Modal modalContent={modalContent} onCancel={closeModal} />}
              {modalIsOpen && <Backdrop onCancel={closeModal} />}
            </Area>
          </section>
        </Form>
      </SectionContainer>
    </Container>
  );
}

export default Forma;
