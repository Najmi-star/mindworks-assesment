import React from 'react';
import CommentService from '../services/CommentService';
import axios from 'axios';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            comment: [],
            isComment: false
        }
    }

    componentDidMount() {
        console.log('try fetch the data =>', this.state)
        CommentService.getComment().then(response => response.data)
            .then((data) => {
                console.log('data =>', data)
                this.setState({ comment: data })
            });
    }

    render() {
        return (
            // <div className="container mt-5 mb-5">
            //     <div className="row d-flex justify-content-center">
            //         <div className="col-md-6">
            //             <div className="comment-section">
            console.log('current state =>', this.state),
                            <div className="card p-3 border-blue mt-3">
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="d-flex flex-row">
                                        <div className="user-image">
                                            <img src="https://i.imgur.com/rvQ3LAt.jpg" width="40" className="rounded-circle" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-0">Laura Nikos</h6> <span className="date">Nov 30, 2020 at 10:40</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, odio in interdum tristique, erat arcu vestibulum leo, non condimentum eros risus quis tellus.</p>
                                <div className="form">
                                    <div className="mt-2 d-flex justify-content-start">
                                        <button className="btn btn-primary btn-sm ms-1">Like</button>
                                        <button className="btn btn-primary btn-sm ms-1"
                                            onClick={() => this.setState({ isComment: true })}>Comment</button>
                                        <button className="btn btn-primary btn-sm ms-1">Share</button> </div>
                                </div>
                                {
                                    this.state.isComment ?
                                        (
                                            <div className="form" style={{ marginTop: 'inherit' }}>
                                                <input className="form-control" placeholder="Write a comment..." />
                                                <div className="mt-2 d-flex justify-content-end">
                                                    <button className="btn btn-outline-secondary btn-sm"
                                                        onClick={() => this.setState({ isComment: false })}>Cancel</button>
                                                    <button className="btn btn-primary btn-sm ms-1">Add Comment</button> </div>
                                            </div>
                                        ) : null
                                }
                            </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default CommentComponent