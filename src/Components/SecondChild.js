import react, { useState } from "react";

const SecondChild = (props) => {
  const { firstName, lastName, extraInfo } = props.info;

  const [data, setData] = useState({
    textField: "Write your opinion",
    isMarried: true,
    isGoing: true,
  });

  const handleChange = (e) => {
    const targetData =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setData({
      ...data,
      [e.target.name]: targetData,
    });
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, data)}>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{extraInfo}</div>
      <textarea
        name="textField"
        value={data.textField}
        onChange={handleChange}
      />
      <label>
        Married :
        <input
          type="checkbox"
          name="isMarried"
          checked={data.isMarried}
          onChange={handleChange}
        />
      </label>
      <label>
        Going :
        <input
          type="checkbox"
          name="isGoing"
          checked={data.isGoing}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

export default SecondChild;


// import react from "react";

// const SecondChild = (props) => {
//   const { firstName, lastName, extraInfo } = props.info;
//   return (
//     <>
//       <div>{firstName}</div>
//       <div>{lastName}</div>
//       <div>{extraInfo}</div>
//     </>
//   );
// };

// export default SecondChild;
