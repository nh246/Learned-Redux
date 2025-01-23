import { Provider } from "react-redux";
import store from "./redux/store";
import Weather from "./components/Weather";

function App() {
  return (
    <Provider store={store}>
      <Weather/>
    </Provider>
  );
}

export default App;
