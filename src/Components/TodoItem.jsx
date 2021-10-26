import { StyledItem } from "./Styled/Item.styled";
import { useState, useRef, useEffect } from 'react';
import { useActions } from '../Hooks/useActions';

const TodoItem = ({ id, isDone, content}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(content);
  const { update_todo, delete_todo } = useActions();
  const itemRef = useRef();
  const textRef = useRef();


  useEffect(() => {
    const stopEditing = (e) => {
      if (!itemRef.current.contains(e.target)) {
        setIsEditing(false);
      }
    }
    document.body.addEventListener("click", stopEditing);

    return () => {
      document.body.removeEventListener("click", stopEditing);
    }
  }, [])

  const toggleEditing = (e) => {
    if (!isEditing) {
      setIsEditing(true);
      textRef.current.focus();
    }
  }

  const leaveEditing = (e) => {
    if (e.charCode === 13 && isEditing) {
      if (tempContent !== content) {
        update_todo({
          id,
          content: tempContent,
          is_done: isDone
        });
      }
      setIsEditing(false);
    }
  }

  const markFinished = () => {
    update_todo({
      id,
      content: tempContent,
      is_done: true
    })
  };

  const deleteTodo = () => {
    delete_todo(id);
  }

  return (
    <StyledItem ref={itemRef} className={`todo-item ${isDone ? "is--done" : ""} ${isEditing ? 'is--editing' : ""}`}>
      <div className="content">
        <button className="mark" onClick={e => markFinished()}></button>
        <p className="text" onClick={e => toggleEditing(e)}>{tempContent}</p>
        <textarea ref={textRef} onKeyPress={e => {leaveEditing(e)}} value={tempContent} onChange={e => setTempContent(e.target.value)}/>
      </div>
      <div className="base">
        <button className="deleteBtn" onClick={e => deleteTodo()}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </StyledItem>
  )
}

export default TodoItem;