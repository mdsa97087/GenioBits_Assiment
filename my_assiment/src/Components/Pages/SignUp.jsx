import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div
      style={{
        width: "20vw",
        height: "40vh",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@gmail.com"
        />
        <label for="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="password"
        />
        <button type="button" className="btn btn-primary">
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
      </div>
    </div>
  );
}

export default SignUp;
