import React from 'react';
import CommentComponent from './CommentComponent';
import CommentService from '../services/CommentService';
import axios from 'axios';

class MainPageComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            comment: [],
        }
    }

    // componentDidMount() {
    //     console.log('try fetch the data =>', this.state)
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)
    //         .then((data) => {
    //             this.setState({ comment: data })
    //         });
    //         console.log('current state =>', this.state)
    // }

    render() {
        return (
            console.log('pass here?'),
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="comment-section">
                            <CommentComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPageComponent