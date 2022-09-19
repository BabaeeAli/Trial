import Payment from "./pages/Payment/Payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppDispatch } from "./hooks/hooks";
import { enterKey } from "./Providers/keyHandler/keyHandler";

import { useEffect, useCallback } from "react";
function App() {
  const dispatch = useAppDispatch();

  const handleEnter = useCallback((event: any) => {
    dispatch(enterKey(event.key));
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEnter);
  }, [handleEnter]);

  return (
    <>
      <Payment />
      <ToastContainer />
    </>
  );
}

export default App;
