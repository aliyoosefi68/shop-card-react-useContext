//context
import ProductContextProvider from "./context/ProductContextProvider";

//components
import Store from "./components/Store";

import "./App.css";

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
