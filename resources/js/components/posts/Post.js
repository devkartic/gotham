import React, {Component} from 'react';

class Post extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            title : '',
            details : '',
            message : ''
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
