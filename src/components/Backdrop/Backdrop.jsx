import { StyledBackdrop } from './styled';
function Backdrop({ onCancel }) {
  return <StyledBackdrop onClick={onCancel} />;
}
export default Backdrop;
