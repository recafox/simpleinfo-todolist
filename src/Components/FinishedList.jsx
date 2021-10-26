import TodoItem from "./TodoItem";
import SectionLabel from "./SectionLabel";
import { StyledListWrapper } from "./Styled/ListWrapper.styled";
import { useSelector } from "react-redux";


const FinishedList = () => {
  const todos = useSelector(state => state.todos.todos);
  const items = todos.length ? todos.filter(todo => todo.is_done === true) : [];
  const renderItems = () => {
    if (items.length) {
      return items.map(todo => <TodoItem key={todo.id} id={todo.id} content={todo.content} isDone={true}></TodoItem>)
    }
    return "";

  };
  return (
    <div>
      <SectionLabel text="已完成待辦" number={items.length} />
      <StyledListWrapper>
        {renderItems()}
      </StyledListWrapper>
    </div>
  )
}

export default FinishedList;