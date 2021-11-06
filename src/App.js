import Header from './components/header/index'
import Main from './components/main/index'
import { GlobalStyle } from "./styles/global";
import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header></Header>
      <Main></Main>
      <GlobalStyle></GlobalStyle>
      </GlobalProvider>
    </div>
  );
}

export default App;
