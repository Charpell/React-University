import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: { 
      username: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.account)
  }

  handleChange = ({ currentTarget }) => {
    const account = {...this.state.account};
    account[currentTarget.name] = currentTarget.value;
    this.setState({ account })
  }

  render() { 
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input  
              id="username" 
              type="text" 
              className="form-control" 
              value={account.username}
              onChange={this.handleChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="text" 
              className="form-control" 
              value={account.password}
              onChange={this.handleChange}
              name="password"
            />
          </div>

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
 
export default LoginForm;