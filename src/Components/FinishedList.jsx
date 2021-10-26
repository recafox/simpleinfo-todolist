import TodoItem from "./TodoItem";
import SectionLabel from "./SectionLabel";
import { StyledListWrapper } from "./Styled/ListWrapper.styled";
import { useSelector } from "react-redux";


const FinishedList = () => {
  const todos = useSelector(state => state.todos.filter(todo => todo.is_done === true));
  const renderItems = () => {
    if (todos.length) {
      return todos.map(todo => <TodoItem key={todo.id} item={todo}></TodoItem>)
    }
    return "";

  };
  return (
    <div>
      <SectionLabel text="已完成待辦" number={todos.length} />
      <StyledListWrapper>
        {renderItems()}
      </StyledListWrapper>
    </div>
  )
}

export default FinishedList;