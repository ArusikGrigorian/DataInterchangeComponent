import react from "react";

const SecondChild = (props) => {
  const { firstName, lastName, extraInfo } = props.info;
  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{extraInfo}</div>
    </>
  );
};

export default SecondChild;
