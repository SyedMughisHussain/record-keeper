import React, { useState } from "react";
import Item from "./Item";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const deleteRecord = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };

  console.log(data);

  return (
    <>
      <form onSubmit={formSubmit} className="flex justify-center mt-5">
        <input
          className="border border-black p-2 focus:outline-none mr-10 w-[300px]"
          placeholder="Name"
          required
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
        <input
          className="border border-black p-2 focus:outline-none w-[300px]"
          placeholder="Email"
          type="text"
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="submit"
          value={"Add"}
          className="ml-5 bg-green-700 text-white p-2 rounded-md"
        />
      </form>
      <Item />
      {data.map((item, index) => (
        <div
          key={index}
          className="flex bg-[#FFFFFF] ml-[240px] mt-5 justify-between w-[800px] p-3 font-bold"
        >
          <p>{item.name}</p>
          <p>{item.email}</p>
          <button
            onClick={() => {
              deleteRecord(index);
            }}
            className="bg-red-700 p-1 rounded-md  text-white"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default Form;
