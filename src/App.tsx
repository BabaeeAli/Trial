import Payment from "./pages/Payment/Payment";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from "react-redux";
import { store } from "./Providers/store";
function App() {
  return (
    <>
        <Provider store={store}>
          <Payment />
          <ToastContainer />
        </Provider>
    </>
  );
}

export default App;
