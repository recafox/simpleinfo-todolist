import { useEffect } from 'react';
import { useActions } from '../Hooks/useActions';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styled/Global";
import { StyledContainer } from "./Styled/Container.styled";
import Logo from './Logo';
import UnfinishedList from './UnfinishedList';
import FinishedList from "./FinishedList";
import AddTodo from './AddTodo';
import LoadingSpinner from './Loading';

const theme = {
  colors: {
    bg: "#EFEFEF",
    itemBg: '#FAFAFA',
    itemText: '#626262',
    sectionLabel: '#767676',
    closeBtn: '#B1B1B1',
    completeAddingBtn: '#80E894',
    mark: '#6969FF',
    delete: '#E36377',
    white: '#FFFFFF',
    title: '#4B4B4B',
  },
  itemRadius: '32px',
  breakPoints: {
    tablet: '1024px',
    mobile: '640px'
  }

}


const App = () => {
  const { get_todos } = useActions();

  useEffect(() => {
    get_todos();
  }, [get_todos]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LoadingSpinner />
      <StyledContainer>
        <Logo />
        <UnfinishedList />
        <FinishedList />
        <AddTodo />
      </StyledContainer>
    </ThemeProvider>
  )
}

export default App;