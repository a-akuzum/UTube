import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value,})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
        () => this.props.history.push('/')
    );
  }

  renderError() {
    return(
      <ul className="">
        {this.props.errors.map( (error, i) => {
          return (
            <li className=""  key={`error-${i}`} >
              {error}
            </li>
          )
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="">
        <div className="">

          <div className="">
            <span className="">U</span>
            <span className="">T</span>
            <span className="">u</span>
            <span className="">b</span>
            <span className="">e</span>
          </div>
        
          <h2 className="">
            <span>Create Account</span>
          </h2>

          <h3 className="">
            <span>to continue to UTube</span>
          </h3>

          <form 
            onSubmit={this.handleSubmit}
            className="" >


            <div className="">
              <input 
                onChange={this.update('username')} 
                id='username'
                type="text"
                value={this.state.username}
                placeholder='Username'/>
            </div>

            <div className="">
              <input 
                onChange={this.update('email')} 
                id='email'
                type="text"
                value={this.state.email}
                placeholder='Email'/>
            </div>
            
            <div className="">
              <input 
                onChange={this.update('password')}
                id='password'
                type="password"
                value={this.state.password}
                placeholder='Password' />
            </div>
            
            {this.renderError()}
            

            <div className="">
              <Link to='/login' className=''>
                <span>Sign in instead</span>
              </Link>

              <input 
                type="submit"
                value='Next'
                className="next-button" />
            </div>

          </form>
        </div>
      </div>
    );
  };
};

export default SignupForm;