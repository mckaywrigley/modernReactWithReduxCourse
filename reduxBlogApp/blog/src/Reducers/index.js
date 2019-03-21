import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    posts: postsReducer,
    users: UserReducer
});