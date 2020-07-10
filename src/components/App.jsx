import React, { useState } from "react";

const App = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  const InputEvent = event => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setfullName(preValue => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          password: preValue.password
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          password: preValue.password
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          password: preValue.password
        };
      } else if (name === "password") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          password: value
        };
      }
    });
  };

  const onSubmits = event => {
    event.preventDefault();
    alert("Login");
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>

          <input
            type="text"
            placeholder="Enter your FirstName"
            name="fName"
            onChange={InputEvent}
            value={fullName.fname}
          />

          <input
            type="text"
            placeholder="Enter your LastName"
            name="lName"
            onChange={InputEvent}
            value={fullName.lname}
          />

          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={InputEvent}
            value={fullName.email}
          />

          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            onChange={InputEvent}
            value={fullName.password}
          />

          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default App;
