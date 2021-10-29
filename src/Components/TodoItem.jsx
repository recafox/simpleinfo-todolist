import { StyledItem } from "./Styled/Item.styled";
import { useState, useRef, useEffect, memo, useMemo } from 'react';
import { useActions } from '../Hooks/useActions';
const TodoItem = ({ item }) => {
  const { id, is_done, content } = useMemo(() => item, [item]);
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(content);
  const { update_todo, delete_todo } = useActions();
  const itemRef = useRef();
  const textRef = useRef();
  const markRef = useRef();


  useEffect(() => {
    const stopEditing = (e) => {
      if (!itemRef.current.contains(e.target)) {
        setIsEditing(false);
        let currentContent = textRef.current.value;
        if (currentContent !== content) {
          update_todo({
            id,
            content: currentContent,
            is_done: is_done
          });
        }
      }
    }
    if (isEditing) {
      document.body.addEventListener("click", stopEditing);
    }
    return () => {
      document.body.removeEventListener("click", stopEditing);
    }
  }, [content, id, is_done, update_todo, isEditing]);


  const turnOnEditing = (e) => {
    if (markRef.current.contains(e.target)) {
      return;
    }
    setIsEditing(true);
    // a workaround
    window.setTimeout(() => {
      textRef.current.focus();
      // start at the end if the input
      textRef.current.setSelectionRange(tempContent.length, tempContent.length);
    }, 0)
  }

  const leaveEditing = (e) => {
    if (e.charCode === 13 && isEditing) {
      if (tempContent !== content) {
        update_todo({
          id,
          content: tempContent,
          is_done: is_done
        });
      }
      setIsEditing(false);
    }
  }

  const toggleFinished = () => {
    update_todo({
      id,
      content: tempContent,
      is_done: !is_done
    })
  };

  const deleteTodo = () => {
    delete_todo(id);
  }

  return (
    <StyledItem ref={itemRef} className={`todo-item ${is_done ? "is--done" : ""} ${isEditing ? 'is--editing' : ""}`}>
      <div className="content" onClick={e => turnOnEditing(e)}>
        <button
          ref={markRef}
          className="mark"
          onClick={e => toggleFinished()}>
        </button>
        <p
          className="text"
        >
          {tempContent}
        </p>
        <textarea
          ref={textRef}
          onKeyPress={e => {leaveEditing(e)}}
          value={tempContent}
          onChange={e => setTempContent(e.target.value)}
        />
      </div>
      <div className="base">
        <button className="deleteBtn" onClick={e => deleteTodo()}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </StyledItem>
  )
}

export default memo(TodoItem, (prevProps, nextProps) => {
  let { item: prevItem } = prevProps;
  let { item: nextItem } = nextProps;

  if (prevItem.content !== nextItem.content || prevItem.is_done !== nextItem.is_done) {
    return false;
  };

  return true;
});