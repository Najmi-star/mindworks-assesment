import React from 'react';
import './Popup.css'
import CommentService from '../services/CommentService';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            comment: [],
            detailPost: '',
            isComment: false,
            commentList: [],
            filterComment: [],
            input: '',
            selectType: ''
        }
        this.postDetail = this.postDetail.bind(this)
    }

    postDetail = (id) => {
        CommentService.getPostById(id).then(response => response.data)
            .then((data) => {
                this.setState({
                    isComment: true,
                    detailPost: data
                })
            });
        this.commentList(id)
    }

    commentList = (id) => {
        CommentService.getComment(id).then(response => response.data)
            .then((data) => {
                this.setState({
                    commentList: data,
                    filterComment: data
                })
            });
    }

    handleFormChange = (event) => {
        let filterResult = this.state.filterComment.filter(item => item.name.includes(event.target.value)) ||
            this.state.filterComment.filter(item => item.email.includes(event.target.value)) ||
            this.state.filterComment.filter(item => item.body.includes(event.target.value))
        console.log('filter =>', filterResult)
        this.setState({
            input: event.target.value,
            filterComment: filterResult
        })
    }

    render() {
        const { detailPost } = this.state
        return (
            console.log('current props =>', this.props),
            console.log('current state =>', this.state),
            <div>
                {this.props.data.map(student =>
                    <div className="card p-3 border-blue mt-3" key={student.id}>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="d-flex flex-row">
                                <div className="d-flex flex-column">
                                    <h6 className="mb-0">{student.title}</h6>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="content">{student.body}</p>
                        <div className="form">
                            <div className="mt-2 d-flex justify-content-start">
                                <button className="btn btn-primary btn-sm ms-1">Like</button>
                                <button className="btn btn-primary btn-sm ms-1"
                                    onClick={() => this.postDetail(student.id)}>Comment</button>
                                <button className="btn btn-primary btn-sm ms-1">Share</button> </div>
                        </div>
                    </div>
                )}

                {
                    this.state.isComment ? (
                        <div className="popup-box">
                            <div className="box">
                                <input className="form-control"
                                    value={this.state.input}
                                    onChange={(e) => this.handleFormChange(e)}
                                    style={{ width: '40%' }}
                                    placeholder="Search by" />
                                <div className="card p-3 border-blue mt-3">
                                    <div className="d-flex justify-content-between mt-2">
                                        <div className="d-flex flex-row">
                                            <div className="d-flex flex-column">
                                                <h6 className="mb-0">{detailPost.title}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className="content">{detailPost.body}</p>
                                    <div className="form">
                                        <div className="mt-2 d-flex justify-content-start">
                                            <button className="btn btn-primary btn-sm ms-1">Like</button>
                                            <button className="btn btn-primary btn-sm ms-1">Share</button> </div>
                                    </div>
                                </div>

                                <div className="card p-3 border-blue mt-3">
                                    <div className="d-flex justify-content-between mt-2">
                                        <div className="d-flex flex-row">
                                            <div className="d-flex flex-column">
                                                <h4 className="mb-0">Comment</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />

                                    {this.state.filterComment.map((comment, index) =>
                                        <div key={index}>
                                            <h6>{comment.name} - {comment.email}</h6>
                                            <p className="content">{comment.body}</p>
                                            <hr />
                                        </div>
                                    )}
                                </div>

                                <div className="form" style={{ marginTop: '5px' }}>
                                    <input className="form-control" placeholder="Write a comment..." />
                                    <div className="mt-2 d-flex justify-content-end">
                                        <button className="btn btn-outline-secondary btn-sm"
                                            onClick={() => this.setState({ isComment: false })}>Cancel</button>
                                        <button className="btn btn-primary btn-sm ms-1">Add Comment</button> </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }

            </div>


        )
    }
}

export default CommentComponent