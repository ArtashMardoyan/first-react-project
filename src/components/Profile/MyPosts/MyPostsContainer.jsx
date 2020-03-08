import { connect } from 'react-redux';

import { createPost, updateNewPostText } from '../../../redux/Profile/pofileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => ({ profilePage: state.profilePage });
const mapDispatchToProps = { createPost, updateNewPostText };

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
