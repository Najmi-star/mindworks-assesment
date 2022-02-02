import axios from 'axios';

const COMMENT_API_LISTING_URL = "https://jsonplaceholder.typicode.com/posts";

class CommentService {

    getComment(){
        return axios.get(COMMENT_API_LISTING_URL);
    }

    // getCommentById(id){
    //     return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new CommentService()