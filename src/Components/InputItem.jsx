import { StyledInputItem } from "./Styled/InputItem.styled";
const InputItem = ({ onChange, val }) => {
  return (
    <StyledInputItem>
      <div className="mark"></div>
      <textarea value={val} onChange={(e) => onChange(e.target.value)}></textarea>
    </StyledInputItem>
  )
}

export default InputItem;