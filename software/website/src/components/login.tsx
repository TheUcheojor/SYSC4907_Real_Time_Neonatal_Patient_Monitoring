import * as React from "react";
import "./../App.css";

interface Props {}

interface State {}

class Login extends React.Component<Props, State> {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="/loading-icon.svg"
            className="loading-icon"
            alt="loading-icon"
          />
          <img
            src="/loading-icon.svg"
            className="loading-icon"
            alt="loading-icon"
          />
          <div>
            <h1>Transport Comfort Analysis</h1>
            <button>Login</button>
          </div>
        </header>
      </div>
    );
  }
}

export default Login;
