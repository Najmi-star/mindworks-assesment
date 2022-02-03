import axios from 'axios';

const POST_API_LISTING_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENT_API_LISTING_URL = 'https://jsonplaceholder.typicode.com/comments?postId='

class CommentService {

    getPost(){
        return axios.get(POST_API_LISTING_URL);
    }

    getPostById(id){
        return axios.get(POST_API_LISTING_URL + '/' + id);
    }

    getComment(id){
        return axios.get(COMMENT_API_LISTING_URL + id);
    }
}

export default new CommentService()