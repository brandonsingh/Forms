import React, {Component} from 'react';

class Forms extends Component {
constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: '',
  }
};

handleSubmit = (event) => {
  //stop propagation
  event.preventDefault();
  alert(`an input was submitted: Username: ${this.state.username} Password: ${this.state.password}`)

}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value})
  
  console.log(this.state.username)
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">
          Username: 
          <input name ="username" onChange={this.handleChange} value={this.state.username} type="text" placeholder="Enter username"/>
         </label>
         <label htmlFor="password">
          Password: 
          <input name="password" onChange={this.handleChange} value={this.state.password} type="password" placeholder="Enter password"/>
         </label>
         <input type="submit"/>
      </form>
    )
  };
};

export default Forms;

