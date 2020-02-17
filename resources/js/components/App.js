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
            login : 1212
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">SPA Application <Link className="nav-link btn btn-sm btn-outline-primary float-right" to={'/login'}>Login</Link></div>

                            <div className="card-body">
                                <Route exact path={'/login'} component={Login}/>
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
