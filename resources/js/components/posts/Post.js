import React, {Component} from 'react';

class Post extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            title : '',
            description : '',
            posts : []
        };

        this.onchangeTitleHandler = this.onchangeTitleHandler.bind(this);
        this.onchangeDescHandler = this.onchangeDescHandler.bind(this);
        this.onsubmitHandler = this.onsubmitHandler.bind(this);
    }

    onchangeTitleHandler(event){
        this.setState({
            title : event.target.value
        });
    }

    onchangeDescHandler(event){
        this.setState({
            description : event.target.value
        });
    }

    onsubmitHandler(event){
        event.preventDefault();
        if(this.state.id==""){
            axios.post('http://127.0.0.1:8000/api/auth/posts', {
                title : this.state.title,
                description : this.state.description,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(response=>{
                this.setState({
                    id : '',
                    title : '',
                    description : '',
                    posts : response.data
                });
            });
        } else {
            axios.patch(`http://127.0.0.1:8000/api/auth/posts/${this.state.id}`, {
                title : this.state.title,
                description : this.state.description,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }).then(response=>{
                this.setState({
                    id : '',
                    title : '',
                    description : '',
                    posts : response.data
                });
            });
        }
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/auth/posts`)
            .then(response=>{
                this.setState({
                    id : '',
                    title : '',
                    description : '',
                    posts : response.data
                });
            });
    }

    onEdit(id){
        axios.get(`http://127.0.0.1:8000/api/auth/posts/${id}/edit`)
            .then(response=>{
                this.setState({
                    id : response.data.id,
                    title : response.data.title,
                    description : response.data.description,
                });
            });
    }


    onDelete(id){
        axios.delete(`http://127.0.0.1:8000/api/auth/posts/${id}`)
            .then(response=>{
                this.setState({
                    id : '',
                    title : '',
                    description : '',
                    posts : response.data
                });
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Post Create</div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="title">Post title</label>
                                        <input type="text" className="form-control" id="title" onChange={this.onchangeTitleHandler} name="title" value={this.state.title}
                                               aria-describedby="title" placeholder="Enter title" />
                                        <small id="title" className="form-text text-muted">We'll never share your email
                                            with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input type="text" className="form-control" onChange={this.onchangeDescHandler} name="name" value={this.state.description} id="description" placeholder="Enter description" />
                                    </div>
                                    <div className="form-group">
                                        <button type="button" onClick={this.onsubmitHandler} className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*Post List*/}
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                List of Posts
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Post title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.posts.map(post=>{
                                            return (
                                                <tr key={ post.id.toString() }>
                                                    <td>{ post.title }</td>
                                                    <td>{ post.description }</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-warning mr-2" onClick={this.onEdit.bind(this, post.id)}>Edit</button>
                                                        <button className="btn btn-sm btn-outline-danger" onClick={this.onDelete.bind(this, post.id, post.name)}>Remove</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
