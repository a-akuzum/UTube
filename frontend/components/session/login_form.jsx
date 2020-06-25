import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }
    
    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser(this.state);
    }

    demoUser(e){
        e.preventDefault();
        this.setState({ email: 'demo@demo.com'});
        this.setState({ password: '123456'});
    }


    render() {
        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                <br />
                    <h3>Please Sign In</h3>
                    {/* {this.renderErrors()} */}
                    <br/>
                    <br/>
                    <div className='input-container'>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            required=' '
                        />
                        <label className='input-labels'>Email</label>
                    </div>
                    <br />
                    <div className='input-container'>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            required=' '
                        />
                        <label className='input-labels'>Password</label>
                    </div>
                    <br />
                    <input className="submit" type="submit" value='Sign In' />
                </form>

                <div className='bottom-form' >
                    <button onClick={this.demoUser}>Demo User</button>
                </div>
            </div>
        );
    }
}

export default Login;