import Wrapper from "./components/Wrapper";
import "./App.css";
import { MyContextProvider } from "./context/Context";

const App: any = () => {
  return (
    <>
      <MyContextProvider>
        <Wrapper />
      </MyContextProvider>
    </>
  );
};

export default App;
