import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
  return (
    <div className="Register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Lets Connect</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            commodi, repellendus ratione consequatur aut cumque similique
            impedit sint earum dicta?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
