
import React from "react";


function Login() {
  return (
    <div style={{
      width:'20vw',
      margin:'auto',
      marginTop:'100px',
    }}>
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
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
