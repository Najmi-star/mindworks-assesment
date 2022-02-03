import React from 'react';
import CommentComponent from './CommentComponent';
import CommentService from '../services/CommentService';

class MainPageComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            comment: [],
            commentFilter: [],
            isDataLoaded: false,
            input: ''
        }
        this.handleFormChange = this.handleFormChange.bind(this)
    }

    componentDidMount() {
        CommentService.getPost().then(response => response.data)
            .then((data) => {
                this.setState({
                    comment: data,
                    commentFilter: data,
                    isDataLoaded: true
                })
            });
    }

    handleFormChange = (event) => {
        this.state.commentFilter = this.state.comment
        let filterResult = this.state.comment.filter(item => item.body.includes(event.target.value))
        console.log('filter =>', filterResult)
        this.setState({input: event.target.value, commentFilter: filterResult})
    }

    render() {
        return (
            console.log('current state =>', this.state),
            <div className="container mt-5 mb-5" style={{border:'1px solid rgba(0,0,0,.125)', 
            boxShadow: '5px 5px 10px 2px rgba(0,0,0,.8)', background:'white'}}>
                <input className="form-control" 
                value={this.state.input}
                onChange={this.handleFormChange}
                style={{marginTop:'inherit'}} 
                placeholder="Search Here..." />
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6" style={{width:'fit-content'}}>
                        <div className="comment-section">
                            {
                                this.state.isDataLoaded ?
                                    (
                                        <CommentComponent data={this.state.commentFilter} />
                                    ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPageComponent