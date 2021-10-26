import SectionLabel from "./SectionLabel";
import TodoItem from "./TodoItem";
import { StyledListWrapper } from "./Styled/ListWrapper.styled";
import { useSelector } from "react-redux";


const UnfinishedList = () => {
  const todos = useSelector(state => {
    return state.todos.filter(todo => todo.is_done === false)
  });
  
  const renderItems = () => {
    if(todos.length) {
      return todos.map(todo => <TodoItem key={todo.id} item={todo}></TodoItem>)
    }
    return "";
  };
  return (
    <div>
      <SectionLabel text="未完成待辦" number={todos.length} />
      <StyledListWrapper>
        {renderItems()}
      </StyledListWrapper>
    </div>
  )
}

export default UnfinishedList;