import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div
      style={{
        width: "20vw",
        height: "40vh",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <form onSubmit={handleSubmit} className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@gmail.com"
        />
        <label for="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="password"
        />
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <br />
        <br />
        <Link
          style={{
            marginLeft: "150px",
          }}
          to="/login"
        >
          User Already Exits
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
