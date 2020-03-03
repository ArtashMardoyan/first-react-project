import { connect } from 'react-redux';

import { updateNewPostTextActionCreator, createPostActionCreator } from '../../../redux/pofileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => ({ profilePage: state.profilePage });
const mapDispatchToProps = dispatch => ({
    createPost: () => dispatch(createPostActionCreator()),
    updateNewPostText: text => dispatch(updateNewPostTextActionCreator(text))
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
