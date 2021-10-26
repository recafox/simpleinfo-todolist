import { StyledAddTodo } from "./Styled/AddTodo.styled";
import AddBtn from "./AddBtn";
import InputItem from "./InputItem";
import { useState } from 'react';
import { useActions } from "../Hooks/useActions";

const AddTodo = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [content, setContent] = useState("");
  const { add_todo } = useActions();

  const onSubmit = () => {
    add_todo(content);
    setContent("");
    setIsAdding(false);
  }

  const renderBtnGroup = () => {
    if (isAdding) {
      return (
        <div className="btn-group">
        <button className="cancel" onClick={e => setIsAdding(false)}>
          <i className="fas fa-times"></i>
        </button>
        <button className="submit" onClick={onSubmit}>
          <i className="fas fa-check"></i>
        </button>
      </div>
      )
    }
    return <AddBtn onClick={() => setIsAdding(true)}/>;
  }

  return (
    <StyledAddTodo className="add-todo">
      {
        isAdding && <div><InputItem onChange={setContent} val={content} /></div>
      }
      { renderBtnGroup() }
    </StyledAddTodo>
  )
}

export default AddTodo;