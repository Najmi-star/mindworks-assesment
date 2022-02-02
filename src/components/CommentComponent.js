import React from 'react';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            comment: [],
            isComment: false
        }
    }

    render() {
        return (
            console.log('current props =>', this.props),

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
                                    onClick={() => this.setState({ isComment: true })}>Comment</button>
                                <button className="btn btn-primary btn-sm ms-1">Share</button> </div>
                        </div>
                    </div>
                )}


            </div>


        )
    }
}

export default CommentComponent