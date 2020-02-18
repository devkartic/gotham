import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter as Router} from "react-router-dom";
import Post from './posts/Post'
import Login from './login/Login'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            email : '',
            login : false,
            token : '',
            success: '',
        };

        this.alertStateHandler = this.alertStateHandler.bind(this);
    }

    alertStateHandler(data){
        this.setState({
            success:'Logged in successfully',
            login : true,
            token : data.access_token
        });
    }


    hasLoggedInUser(){
        if(!this.state.login) return <Login alert={this.alertStateHandler} />
        return <Post />;
    }

    hasMessage(){
        if(this.state.success!=='') {
            return(
                <div className="container">
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success!</strong> { this.state.success }.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">SPA Application {/*<Link className="nav-link btn btn-sm btn-outline-primary float-right" to={'/'}>Login</Link>*/}</div>

                            <div className="card-body">
                                { this.hasMessage() }
                                {/*<Route exact path={'/'} component={Login}/>*/}
                                { this.hasLoggedInUser() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
}
