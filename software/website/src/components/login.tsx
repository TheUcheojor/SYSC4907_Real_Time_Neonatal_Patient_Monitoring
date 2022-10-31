import * as React from "react";
import "./../css/App.css";
import "./../css/login.css";

interface Props {}

interface State {}

class Login extends React.Component<Props, State> {
  state = {};
  render() {
    return (
      <div className="login">
          <img src="/baby.svg" className="baby-icon" alt="baby-icon" />
          <div>
            <h1>Transport Comfort Analysis</h1>
            <div className="input-container">
              <input className="text-input" type="text" placeholder="Email" />
            </div>
            <div className="input-container">
              <input
                className="text-input"
                type="password"
                placeholder="Password"
              />
            </div>           
            <div className="button-container">
              <button>Login</button>
            </div>
            <div>
              <span className="login-link">No account? Sign up</span>
            </div>
            <div>
              <span className="login-link">Forgot password?</span>
            </div>
          </div>
      </div>
    );
  }
}

export default Login;
