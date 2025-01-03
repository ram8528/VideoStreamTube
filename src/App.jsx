import { Provider } from "react-redux";
import Body from "./components/Body.jsx";
import appStore from "./utils/appStore.jsx";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
