import Header from './components/header/index'
import Main from './components/main/index'
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
