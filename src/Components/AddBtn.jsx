import { StyledAddBtn } from "./Styled/AddTodo.styled";
const AddBtn = ({ onClick }) => {
  return (
    <StyledAddBtn onClick={e => onClick(e)}>
      <i className="fas fa-plus"></i>
    </StyledAddBtn>
  )
}

export default AddBtn;