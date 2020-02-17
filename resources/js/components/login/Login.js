import React, {Component} from 'react';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };

        this.onchangeEmailHandler = this.onchangeEmailHandler.bind(this);
        this.onchangePasswordHandler = this.onchangePasswordHandler.bind(this);
    }

    onchangeEmailHandler(event){
        this.setState({
           email : event.target.value()
        });
    }

    onchangePasswordHandler(event){
        this.setState({
            password : event.target.value()
        });
    }

    componentDidMount(){
        this.setState({
            email : '',
            password : ''
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">User Login</div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Article name</label>
                                        <input type="email" className="form-control" id="email" name="email" onChange={this.onchangeEmailHandler} value={this.state.email}
                                               aria-describedby="name" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input type="text" className="form-control" name="password" onChange={this.onchangePasswordHandler} value={this.state.password} id="password" placeholder="Enter password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
