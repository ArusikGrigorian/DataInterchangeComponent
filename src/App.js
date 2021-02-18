import "./App.css";
import FirstChild from "./Components/FirstChild";
import SecondChild from "./Components/SecondChild";
import { useState } from "react";

const App = () => {
  const [info, setInfo] = useState();

  const callBackFunction = (info) => {
    setInfo({
      ...info,
    });
  };

  return (
    <>
      {!info ? (
        <FirstChild callBackFunction={callBackFunction} />
      ) : (
        <SecondChild info={info} />
      )}
    </>
  );
};

export default App;
