import react from "react";
import { useState } from "react";

const FirstChild = ({ callBackFunction }) => {
  const [info, setInfo] = useState({
    firstName: "Anun",
    lastName: "Azganunyan",
    extraInfo: "feeling happy",
  });

  const handleSubmit = (e, info, callBackFunction) => {
    e.preventDefault();
    callBackFunction(info);
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, info, callBackFunction)}>
        <input
          type="text"
          name="firstName"
          value={info.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={info.lastName}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default FirstChild;
