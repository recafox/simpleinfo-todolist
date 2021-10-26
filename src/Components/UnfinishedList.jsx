import SectionLabel from "./SectionLabel";
import TodoItem from "./TodoItem";
import { StyledListWrapper } from "./Styled/ListWrapper.styled";
import { useSelector } from "react-redux";


const UnfinishedList = () => {
  const todos = useSelector(state => state.todos.todos);
  let items = todos.length ? todos.filter(todo => todo.is_done === false) : [];
  const renderItems = () => {
    if(items.length) {
      return items.map(todo => <TodoItem key={todo.id} id={todo.id} content={todo.content} isDone={false}></TodoItem>)
    }
    return "";
  };
  return (
    <div>
      <SectionLabel text="未完成待辦" number={items.length} />
      <StyledListWrapper>
        {renderItems()}
      </StyledListWrapper>
    </div>
  )
}

export default UnfinishedList;