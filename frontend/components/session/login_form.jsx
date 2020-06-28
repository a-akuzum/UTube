import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  };

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
      () => this.props.history.goBack(),
    );
  }

  renderError() {
    return (
      <ul className=''>
        {this.props.errors.map((error, i) => {
          return (
            <li 
              key={`error-${i}`}
              className="" >
              <i className=""></i>
              {error}
            </li>
          );
        })}
      </ul>
    );
  };

  loginDemoUser(e) {
    e.preventDefault();
    this.state = {
      username: 'demo',
      password: 'UTube123456',
    };

    const demoUser = Object.assign({}, this.state);
    this.props.processForm(demoUser).then(
      () => this.props.history.goBack(),
    );
  }

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

          <h1 className="">
            <span>Sign in</span>
          </h1>

          <h2 className="">
            <span>to continue to UTube</span>
          </h2>

          <form
            onSubmit={this.handleSubmit}
            className="" >

            
            <div className="">
              <input
                onChange={this.update('username')}
                type="text"
                value={this.state.username}
                placeholder='Username' />
            </div>

            <div className="">
              <input
                onChange={this.update('password')} 
                type="password"
                value={this.state.password}
                placeholder='Password'/>
            </div>

            {this.renderError()}

            <div className="">
              <Link to='/signup' className=''>
                <span >Create account</span>
              </Link>
              <input 
                type="submit"
                value='Next'
                className="" />
            </div>

            <div className="">
              <input 
                className=""
                type="submit"
                value="Demo Account"
                onClick={this.loginDemoUser} />
            </div>

          </form>
        </div>
      </div>
    )
  }
};

export default LoginForm;